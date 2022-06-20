import { FC, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Pagination } from 'swiper'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import { SwiperSlide } from 'swiper/react'
import { Swiper } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/zoom'

import italianMan from '../../../public/images/italian-man.png'
import { fetchCards, setScore } from '../../redux/sliceReducer'
import Card from '../Card'
import Loader from '../Loader'
import AnswerButtons from './AnswerButtons'
import Score from './Score'
import styles from './index.module.scss'

type Word = {
  id: number
  italianWord: string
  englishWord: string
  imageSrc: string
  wrongAnswer: string[] | undefined
}

const TrainCards: FC = () => {
  const dispatch = useDispatch()
  //@ts-ignore
  const { cards, score, loading } = useSelector((state) => state.reducer)
  const navigate = useNavigate()

  //TODO change to appropriate typing
  let [shownCards, setShownCards] = useState<any>([])

  const addSlidesToHistory = (id: number) => {
    setShownCards([...shownCards, id])
  }

  const [isModalShown, setIsModalShown] = useState(true)
  const handleClose = () => setIsModalShown(false)

  useEffect(() => {
    if (cards.length === 0) {
      // @ts-ignore
      dispatch(fetchCards())
    } else return
  }, [])

  if (loading) return <Loader />

  const myNewDataFiltered = cards.filter((word: Word) => shownCards.includes(word.id) === false)

  return (
    <>
      {!myNewDataFiltered.length && (
        <Modal
          show={isModalShown}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Congratulazioni!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={`flex-row-reverse-center ${styles.rowGapModalWrapper}`}>
              <div className={`flex-column-center ${styles.textModalWrapper}`}>
                <h2>You have succesfully finished this lesson</h2>
                <h2 className={`flex-row-center ${styles.rowGapModalWrapper}`}>
                  Your score is <p className="highlighted"> {`${score}`}</p>
                </h2>
              </div>
              <img
                className={styles.gondolierFromTheLeft}
                src={italianMan}
                height="290px"
                width="290px"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                navigate('/learn')
                handleClose
              }}
            >
              Go to learning
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setShownCards([])
                handleClose
              }}
            >
              Continue training
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <Score score={score} numberOfCards={cards.length} />

      {Boolean(myNewDataFiltered.length) && (
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          modules={[Navigation, Pagination]}
          className={styles.mySwiper}
        >
          {myNewDataFiltered.map((word: Word) => {
            return (
              <SwiperSlide className={styles.mySwiperSlide}>
                <Card italianWord={word.italianWord} imageSrc={word.imageSrc} />
                <AnswerButtons
                  key={word.id}
                  id={word.id}
                  englishWord={word.englishWord}
                  wrongAnswer={word.wrongAnswer}
                  setUserScore={setScore}
                  addSlidesToHistory={addSlidesToHistory}
                  randomNum={Math.random()}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}
    </>
  )
}

export default TrainCards

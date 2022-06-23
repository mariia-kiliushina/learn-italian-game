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
import { fetchCards, postScoreToServer, setShownCardsIds } from '../../redux/sliceReducer'
import { getLocalStorageItem } from '../../utils/localStorage'
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
  let [shownCardsState, setShownCardsState] = useState<number[]>([])

  const dispatch = useDispatch()
  //@ts-ignore
  const { cards, shownCardsIds, userScore, loading } = useSelector((state) => state.reducer)
  const navigate = useNavigate()

  const addSlidesToHistory = (id: number) => {
    dispatch(setShownCardsIds(id))
    setShownCardsState([...shownCardsState, id])
  }

  const [isModalShown] = useState(true)
  const handleClose = () => {
    // setIsModalShown(false)
    setShownCardsState([])
    // @ts-ignore
    dispatch(fetchCards())
    // @ts-ignore
    dispatch(postScoreToServer(userScoreFromStorage))
  }
  const handleCloseFinished = () => {
    navigate('/learn')
    setShownCardsState([])
    // @ts-ignore
    dispatch(postScoreToServer(userScoreFromStorage))
  }

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchCards())
  }, [])

  useEffect(() => {
    if (cards.length === 0) {
      // @ts-ignore
      dispatch(fetchCards())
    } else return
  }, [])

  const cardsShownPerSession = 5

  const shuffle = (a: {}[]) => {
    const aCopy = [...a]
    for (let i = aCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[aCopy[i], aCopy[j]] = [aCopy[j], aCopy[i]]
    }
    return aCopy
  }

  const myNewDataFiltered = cards.filter((word: Word) => shownCardsIds.includes(word.id) === false)

  let shuffledCards = shuffle(myNewDataFiltered)

  // localStorage.clear()

  let userScoreFromStorage = getLocalStorageItem('userScore')

  console.log('shownCardsState')
  console.log(shownCardsState)
  console.log('shownCardsIds')
  console.log(shownCardsIds)

  if (loading) return <Loader />
  return (
    <>
      {shownCardsState.length === cardsShownPerSession && shownCardsIds.length !== cards.length && (
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
                  You've earned <p className="highlighted"> {`${userScoreFromStorage}`} points</p>
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
                handleClose()
              }}
            >
              Go to learning
            </Button>

            <Button
              variant="primary"
              onClick={() => {
                handleClose()
              }}
            >
              Continue training
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {shownCardsIds.length === cards.length && (
        <Modal
          show={isModalShown}
          onHide={handleCloseFinished}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>Congratulazioni!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={`flex-row-reverse-center ${styles.rowGapModalWrapper}`}>
              <div className={`flex-column-center ${styles.textModalWrapper}`}>
                <h2>You have completed your training for today</h2>
                <h2 className={`flex-row-center ${styles.rowGapModalWrapper}`}>
                  You've earned <p className="highlighted"> {`${userScoreFromStorage}`} points</p>
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
                handleCloseFinished()
              }}
            >
              Go to learning
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <Score score={userScoreFromStorage} numberOfCards={cards.length} />

      {Boolean(shuffledCards.length) && (
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          modules={[Navigation, Pagination]}
          className={styles.mySwiper}
        >
          {/* @ts-ignore */}
          {shuffledCards.map((word: Word) => {
            return (
              <SwiperSlide className={styles.mySwiperSlide}>
                <Card italianWord={word.italianWord} imageSrc={word.imageSrc} />
                <AnswerButtons
                  key={word.id}
                  id={word.id}
                  englishWord={word.englishWord}
                  wrongAnswer={word.wrongAnswer}
                  postScoreToServer={postScoreToServer}
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

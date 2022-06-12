import 'bootstrap/dist/css/bootstrap.min.css'
import randomWords from 'random-words'
import { FC, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Pagination } from 'swiper'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import { SwiperSlide } from 'swiper/react'
import { Swiper } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/zoom'

import Loader from '#components/Loader'

import italianMan from '../../../public/images/italian-man.png'
import CardWithWords from './CardWithWords'
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
  let [myData, setMyData] = useState<Word[] | undefined>(undefined)
  let [userScore, setUserScore] = useState<number>(0)
  //TODO change to appropriate typing
  let [shownCards, setShownCards] = useState<any>([])

  const addSlidesToHistory = (id: number) => {
    setShownCards([...shownCards, id])
  }

  const [isModalShown, setIsModalShown] = useState(true)
  const handleClose = () => setIsModalShown(false)

  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mariia-kiliushina/learn-italian-db/master/data.json')
      .then((response) => response.json())
      .then((data) => Object.values(data) as Word[])
      .then((myData) => {
        setMyData(
          myData.map((word: Word) => ({
            ...word,
            wrongAnswer: randomWords(1),
          })),
        )
      })
  }, [])

  if (myData === undefined) return <Loader />

  const myNewDataFiltered = myData.filter((word) => shownCards.includes(word.id) === false)

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
                  Your score is <p className="highlighted"> {`${userScore}`}</p>
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
            <Button variant="primary" onClick={handleClose}>
              Continue training
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <Score score={userScore} numberOfCards={myData.length} />

      {Boolean(myNewDataFiltered.length) && (
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          modules={[Navigation, Pagination]}
          className={styles.mySwiper}
        >
          {myNewDataFiltered.map((word) => {
            return (
              <SwiperSlide className={styles.mySwiperSlide}>
                <CardWithWords
                  key={word.id}
                  word={word}
                  userScore={userScore}
                  setUserScore={setUserScore}
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

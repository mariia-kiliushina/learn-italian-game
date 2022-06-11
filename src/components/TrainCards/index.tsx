import randomWords from 'random-words'
import { FC, useEffect, useState } from 'react'
import { Pagination } from 'swiper'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import { SwiperSlide } from 'swiper/react'
import { Swiper } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/zoom'

import Loader from '#components/Loader'

import CardWithWords from './CardWithWords'
import Congrats from './Congrats'
import Score from './Score'
import styles from './index.module.scss'

// type Word = {
//   id: number
//   italianWord: string
//   englishWord: string
//   imageSrc: string
// }
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
  console.log(myData)

  return (
    <>
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
                  //@ts-ignore
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
      {!myNewDataFiltered.length && <Congrats score={userScore} />}
    </>
  )
}

export default TrainCards

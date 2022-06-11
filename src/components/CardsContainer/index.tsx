import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pagination } from 'swiper'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/zoom'

import ButtonPrimary from '#components/buttons'

import Card from '../../components/Card'
import styles from './index.module.scss'

type Word = {
  id: number
  italianWord: string
  englishWord: string
  imageSrc: string
}

const CardsContainer: FC = () => {
  let [myData, setMyData] = useState<Word[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mariia-kiliushina/learn-italian-db/master/data.json')
      .then((response) => response.json())
      .then((data) => Object.values(data) as Word[])
      .then(setMyData)
  }, [])

  return (
    <div>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
        }}
        className={styles.mySwiper}
      >
        {myData.map((word) => {
          return (
            <SwiperSlide className={styles.mySwiperSlide}>
              <Card
                key={word.id}
                italianWord={word.italianWord}
                englishWord={word.englishWord}
                imageSrc={word.imageSrc}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <ButtonPrimary
        onClick={() => {
          navigate('/train')
        }}
      >
        I learnt all words
      </ButtonPrimary>
    </div>
  )
}

export default CardsContainer

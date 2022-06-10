import { FC } from 'react'
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

const wordsList = [
  {
    italianWord: 'uovo',
    englishWord: 'man',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Eggs-5486.JPG',
  },
  {
    italianWord: 'pasticceria',
    englishWord: 'bakery',
    imageSrc:
      'https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/styles/article_1200_800_fallback/public/2022-02/Pasticceria-Cavour-DaV-Lab_0.jpg?itok=iE-Tmx0q',
  },
  {
    italianWord: 'lione',
    englishWord: 'lion',
    imageSrc: 'https://www.krugerpark.co.za/images/black-maned-lion-shem-compion-786x500.jpg',
  },
]

const CardsContainer: FC = () => {
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
        // breakpoints={{
        //   768: {
        //     slidesPerView: 3,
        //   },
        // }}
        className={styles.mySwiper}
      >
        {wordsList.map((word, key) => {
          return (
            <SwiperSlide className={styles.mySwiperSlide}>
              <Card
                key={key}
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
          console.log('Clicked')
        }}
      >
        I learnt all words
      </ButtonPrimary>
    </div>
  )
}

export default CardsContainer

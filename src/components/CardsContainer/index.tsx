import { FC } from 'react'
import { Pagination } from 'swiper'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/zoom'

import Card from '../../components/Card'
import styles from './index.module.scss'

// const wordsList = ['uovo', 'pasticceria', 'lione']

const CardsContainer: FC = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      navigation={true}
      modules={[Navigation, Pagination]}
      pagination={{
        clickable: true,
      }}
      className={styles.mySwiper}
    >
      <SwiperSlide className={styles.mySwiperSlide}>
        <Card
          italianWord="asd"
          russianWord="sad"
          imageSrc="https://img.restaurantguru.com/r7ff-Pasticceria-Pina-cake.jpg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.mySwiperSlide}>
        <Card
          italianWord="dsf"
          russianWord="adsf"
          imageSrc="https://img.restaurantguru.com/r7ff-Pasticceria-Pina-cake.jpg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.mySwiperSlide}>
        <Card
          italianWord="asd"
          russianWord="sad"
          imageSrc="https://img.restaurantguru.com/r7ff-Pasticceria-Pina-cake.jpg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.mySwiperSlide}>
        <Card
          italianWord="dsf"
          russianWord="adsf"
          imageSrc="https://img.restaurantguru.com/r7ff-Pasticceria-Pina-cake.jpg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.mySwiperSlide}>
        <Card
          italianWord="dsf"
          russianWord="adsf"
          imageSrc="https://img.restaurantguru.com/r7ff-Pasticceria-Pina-cake.jpg"
        />
      </SwiperSlide>
      {/* {wordsList.map((word, key) => (
        <SwiperSlide>
          <Card key={key} italianWord={word} />
        </SwiperSlide>
      ))} */}
    </Swiper>
  )
}

export default CardsContainer

import { FC, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Pagination } from 'swiper'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/zoom'

import { fetchCards } from '../../redux/sliceReducer'
import Card from '../Card'
import styles from './index.module.scss'

type Word = {
  id: number
  italianWord: string
  englishWord: string
  imageSrc: string
}

const LearnCards: FC = () => {
  const dispatch = useDispatch() // @ts-ignore
  const { cards } = useSelector((state) => state.reducer)
  const navigate = useNavigate()

  useEffect(() => {
    if (cards.length === 0) {
      // @ts-ignore
      dispatch(fetchCards())
    } else return
  }, [])

  return (
    <div className="flex-column-center">
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
        {cards.map((word: Word) => {
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
      <Button
        onClick={() => {
          navigate('/train')
        }}
      >
        I learnt all words
      </Button>
    </div>
  )
}

export default LearnCards

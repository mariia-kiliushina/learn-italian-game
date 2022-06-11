import { FC, useState } from 'react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/zoom'

import ButtonPrimary from '#components/buttons'

import Card from '../../Card'
import styles from './index.module.scss'

type Props = {
  word: {
    id: number
    italianWord: string
    imageSrc: string
    englishWord: string
    wrongAnswer: string | undefined
  }
  userScore: number
  setUserScore: (userScore: number) => void
  addSlidesToHistory: (id: number) => void
  randomNum: number
}

const CardWithWords: FC<Props> = ({
  word,
  setUserScore,
  userScore,
  addSlidesToHistory,
  randomNum,
}) => {
  const flexDirection = randomNum > 0.5 ? 'row' : 'row-reverse'

  let [isAnswerRight1, setIsAnswerRight1] = useState<boolean | null>(null)
  let [isAnswerRight2, setIsAnswerRight2] = useState<boolean | null>(null)

  const button1ClassName = isAnswerRight1 === true ? 'rightAnswer' : ''
  const button2ClassName = isAnswerRight2 === false ? 'wrongAnswer' : ''

  return (
    <>
      <Card italianWord={word.italianWord} imageSrc={word.imageSrc} />

      <div className={`flex-${flexDirection}-center  ${styles.buttonsWrapper}`}>
        <ButtonPrimary
          className={button1ClassName}
          onClick={() => {
            setIsAnswerRight1(true)
            setTimeout(() => {
              addSlidesToHistory(word.id)
              setUserScore((userScore += 1))
            }, 1000)
          }}
        >
          {word.englishWord}
        </ButtonPrimary>
        <ButtonPrimary
          className={button2ClassName}
          onClick={() => {
            setIsAnswerRight2(false)
            setTimeout(() => {
              addSlidesToHistory(word.id)
            }, 1000)
          }}
        >
          {word.wrongAnswer}
        </ButtonPrimary>
      </div>
    </>
  )
}

export default CardWithWords

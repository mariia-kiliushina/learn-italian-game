import { FC, useState } from 'react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/zoom'

import ButtonPrimary from '#components/buttons'

import styles from './index.module.scss'

type Props = {
  id: number
  englishWord: string
  wrongAnswer: string[] | undefined
  userScore: number
  setUserScore: (userScore: number) => void
  addSlidesToHistory: (id: number) => void
  randomNum: number
}

const AnswerButtons: FC<Props> = ({
  id,
  englishWord,
  wrongAnswer,
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
    <div className={`flex-${flexDirection}-center  ${styles.buttonsWrapper}`}>
      <ButtonPrimary
        className={button1ClassName}
        onClick={() => {
          setIsAnswerRight1(true)
          setTimeout(() => {
            addSlidesToHistory(id)
            setUserScore((userScore += 1))
          }, 1000)
        }}
      >
        {englishWord}
      </ButtonPrimary>
      <ButtonPrimary
        className={button2ClassName}
        onClick={() => {
          setIsAnswerRight2(false)
          setTimeout(() => {
            addSlidesToHistory(id)
          }, 1000)
        }}
      >
        {wrongAnswer}
      </ButtonPrimary>
    </div>
  )
}

export default AnswerButtons

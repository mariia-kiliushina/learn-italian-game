import { AsyncThunk } from '@reduxjs/toolkit'
import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/zoom'

import ButtonPrimary from '#components/buttons'

import styles from './index.module.scss'

type Props = {
  id: number
  englishWord: string
  wrongAnswer: string[] | undefined
  postScoreToServer: AsyncThunk<void, void, {}>
  addSlidesToHistory: (id: number) => void
  randomNum: number
}

const AnswerButtons: FC<Props> = ({
  id,
  englishWord,
  wrongAnswer,
  postScoreToServer,
  addSlidesToHistory,
  randomNum,
}) => {
  const dispatch = useDispatch()
  //@ts-ignore
  const { userScore } = useSelector((state) => state.reducer)
  let score = Number(localStorage.getItem('userScore'))
  console.log('SCORE')
  console.log(score)

  // localStorage.removeItem('userScore')

  const flexDirection = randomNum > 0.5 ? 'row' : 'row-reverse'

  let [isAnswerRight1, setIsAnswerRight1] = useState<boolean | null>(null)
  let [isAnswerRight2, setIsAnswerRight2] = useState<boolean | null>(null)

  const button1ClassName = isAnswerRight1 === true ? 'rightAnswer' : ''
  const button2ClassName = isAnswerRight2 === false ? 'wrongAnswer' : ''
  const disabled = isAnswerRight1 !== null || isAnswerRight2 !== null ? true : false

  return (
    <div className={`flex-${flexDirection}-center  ${styles.buttonsWrapper}`}>
      <ButtonPrimary
        disabled={disabled}
        className={button1ClassName}
        onClick={() => {
          setIsAnswerRight1(true)
          setTimeout(() => {
            addSlidesToHistory(id)
            let newScore = 0
            if (score !== null) {
              newScore = score + 1
            }
            // @ts-ignore
            dispatch(postScoreToServer(newScore))
            localStorage.setItem('userScore', newScore.toString())
          }, 1000)
        }}
      >
        {englishWord}
      </ButtonPrimary>
      <ButtonPrimary
        disabled={disabled}
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

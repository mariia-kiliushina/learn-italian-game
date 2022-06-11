import { FC } from 'react'

import styles from './index.module.scss'

type Props = {
  score: number
  numberOfCards: number
}

const Score: FC<Props> = ({ score, numberOfCards }) => {
  return (
    <div className={styles.scoreWrapper}>
      <h2>{`Your running tally is ${score} out of ${numberOfCards}`}</h2>
    </div>
  )
}

export default Score

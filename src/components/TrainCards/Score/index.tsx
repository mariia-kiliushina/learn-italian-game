import { FC } from 'react'

import styles from './index.module.scss'

type Props = {
  score: string | null
  numberOfCards: number
}

const Score: FC<Props> = ({ score = 0, numberOfCards }) => {
  return (
    <div className={styles.scoreWrapper}>
      {!score && <h2>{`Your running tally is 0 out of ${numberOfCards}`}</h2>}
      {score && <h2>{`Your running tally is ${score} out of ${numberOfCards}`}</h2>}
    </div>
  )
}

export default Score

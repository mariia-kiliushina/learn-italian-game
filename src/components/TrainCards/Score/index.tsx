import { FC } from 'react'

import styles from './index.module.scss'

type Props = {
  score: string | null
  numberOfCards: number
}

const Score: FC<Props> = ({ score = 0, numberOfCards }) => {
  return (
    <>
      <div className={styles.scoreWrapper}>
        {!Boolean(score) && <h2>{`0 out of ${numberOfCards}`}</h2>}
        {Boolean(score) && <h2>{`${score} out of ${numberOfCards}`}</h2>}
      </div>
    </>
  )
}

export default Score

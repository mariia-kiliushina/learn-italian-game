import { FC } from 'react'

import styles from './index.module.scss'

type Props = {
  score: string | null
  numberOfCards: number
}

const Score: FC<Props> = ({ score = 0, numberOfCards }) => {
  return (
    <>
      {/*@ts-ignore*/}
      {/* {isNaN(score) && null} */}
      {/*@ts-ignore*/}
      {/* {!isNaN(score) && ( */}
      <div className={styles.scoreWrapper}>
        {!Boolean(score) && <h2>{`Your running tally is 0 out of ${numberOfCards}`}</h2>}
        {Boolean(score) && <h2>{`Your running tally is ${score} out of ${numberOfCards}`}</h2>}
      </div>
      {/* )} */}
    </>
  )
}

export default Score

import { FC } from 'react'

import italianMan from '../../../../public/images/italian-man.png'
import styles from './index.module.scss'

type Props = {
  score: number
}

const Congrats: FC<Props> = ({ score }) => {
  return (
    <div>
      <div className={styles.congratsWrapper}>
        <h2>Congratulazioni!</h2>
        <h3>You have succesfully finished this lesson</h3>
        <h3>
          Your score is <p className="highlighted"> {`${score}`}</p>
        </h3>
      </div>
      <img className={styles.gondolierFromTheLeft} src={italianMan} height="280px" />
    </div>
  )
}

export default Congrats

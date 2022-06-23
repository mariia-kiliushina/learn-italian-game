import { FC } from 'react'

import italianMan from '../../../../public/images/italian-man.png'
import styles from './index.module.scss'

const GreetCard: FC = () => {
  return (
    <div className={`flex-column-center ${styles.cardItemWrapper}`}>
      <h2>
        You can Learn Italian
        <div className="highlighted" color-txt="$color-contrastic-1">
          bellissima lingua
        </div>
      </h2>
      <h2>playing</h2>
      <img src={italianMan} height="280px" />
    </div>
  )
}

export default GreetCard

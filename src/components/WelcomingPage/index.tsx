import { FC } from 'react'

import italianMan from '../../../public/images/italian-man.png'
import Card from './Card'
import styles from './index.module.scss'

const WelcomingPage: FC = () => {
  return (
    <div className="content-wrapper flex-column-center ">
      <div className={styles.welcome_speech}>
        <h2>You can Learn la bella Italian language</h2>
        <p>playing</p>
        <img src={italianMan} height="280px" />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default WelcomingPage

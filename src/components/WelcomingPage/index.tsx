import { FC } from 'react'

import GreetCard from './GreetCard'

// import styles from './index.module.scss'

const WelcomingPage: FC = () => {
  return (
    <div className="content-wrapper flex-column-center ">
      <GreetCard />
    </div>
  )
}

export default WelcomingPage

import { FC } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

import colosseum from '../../../public/images/colosseum-100.png'
import lasagna from '../../../public/images/lasagna-64.png'
import coffee from '../../../public/images/moka-pot-64.png'
import pizza from '../../../public/images/pizza-slice-64.png'
import Card from './Card'
import GreetCard from './GreetCard'
import styles from './index.module.scss'

const WelcomingPage: FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="content-wrapper flex-row-center">
        <div className="flex-column-center">
          <GreetCard></GreetCard>
          <Button
            onClick={() => {
              navigate('/learn')
            }}
          >
            Start learning
          </Button>
        </div>
        <div>
          <div className={styles.cardGridWrapper}>
            <Card
              heading={'Ordering your pizza...'}
              description={'using local language'}
              imgSrc={pizza}
              className={styles.cardGrid1}
            />

            <Card
              heading={'Sipping your coffee...'}
              description={'and having a little chat with a waiter'}
              imgSrc={coffee}
              className={styles.cardGrid2}
            />
            <Card
              heading={'Expressing your impressions...'}
              description={'melodically and emotionally'}
              imgSrc={colosseum}
              className={styles.cardGrid3}
            />
            <Card
              heading={'Walking around the streets...'}
              description={'and ask locals how to go to Uficci gallery'}
              imgSrc={lasagna}
              className={styles.cardGrid4}
            />
          </div>
        </div>
      </div>
      <div className={styles.noop}></div>
      <div className={styles.noop}></div>
    </>
  )
}

export default WelcomingPage

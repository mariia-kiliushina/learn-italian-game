import { FC } from 'react'

import ButtonPrimary from '#components/buttons'

import colosseum from '../../../public/images/colosseum-100.png'
import lasagna from '../../../public/images/lasagna-64.png'
import coffee from '../../../public/images/moka-pot-64.png'
import pizza from '../../../public/images/pizza-slice-64.png'
import Card from './Card'
import GreetCard from './GreetCard'
import styles from './index.module.scss'

const WelcomingPage: FC = () => {
  return (
    <>
      <div className="content-wrapper flex-row-center">
        <div className="flex-column-center">
          <GreetCard></GreetCard>
          <ButtonPrimary
            onClick={() => {
              alert('route to learning page')
            }}
          >
            Start learning
          </ButtonPrimary>
        </div>
        <div>
          <div className={styles.cardGridWrapper}>
            <Card
              heading={'Ordering your pizza...'}
              description={'using local language'}
              imageSrc={pizza}
              // className={styles.cardGrid1}
            />

            <Card
              heading={'Sipping your coffee...'}
              description={'and having a little chat with a waiter'}
              imageSrc={coffee}
              // className={styles.cardGrid2}
            />
            <Card
              heading={'Expressing your impressions...'}
              description={'melodically and emotionally'}
              imageSrc={colosseum}
              // className={styles.cardGrid3}
            />
            <Card
              heading={'Walking around the streets...'}
              description={'and ask locals how to go to Uficci gallery'}
              imageSrc={lasagna}
              // className={styles.cardGrid4}
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

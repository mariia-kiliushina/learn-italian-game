import { FC } from 'react'

import styles from './index.module.scss'

type Props = {
  heading: string
  description: string
  imgSrc: string
}

const Card: FC<Props> = ({ heading, description, imgSrc }) => {
  return (
    <div className={styles.cardItemWrapper}>
      <div className={styles.cardImageWrapper}>
        <img src={imgSrc} />
      </div>
      <div className={styles.cardTextWrapper}>
        <p>{heading}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card

import { FC } from 'react'

import styles from './index.module.scss'

type Props = {
  heading: string
  description: string
  imgSrc: string
  className: string
}

const Card: FC<Props> = ({ heading, description, imgSrc, className }) => {
  return (
    <div className={className}>
      <div className={styles.cardItemWrapper}>
        <div className={styles.cardImageWrapper}>
          <img src={imgSrc} />
        </div>
        <div className={styles.cardTextWrapper}>
          <p className={styles.cardHeader}>{heading}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card

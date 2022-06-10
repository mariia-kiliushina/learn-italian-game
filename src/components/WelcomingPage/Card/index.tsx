import { FC } from 'react'

import styles from './index.module.scss'

type Props = {
  heading: string
  description: string
  imageSrc: string
  className: string
}

const Card: FC<Props> = ({ heading, description, imageSrc, className }) => {
  return (
    <div className={className}>
      <div className={styles.cardItemWrapper}>
        <div className={styles.cardImageWrapper}>
          <img src={imageSrc} />
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

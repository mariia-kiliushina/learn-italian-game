import { FC } from 'react'

import styles from './index.module.scss'

type Props = {
  heading: string
  description: string
  imageSrc: string
}

const Card: FC<Props> = ({ heading, description, imageSrc }) => {
  return (
    <div className={styles.cardItemWrapper}>
      <div className={styles.cardImageWrapper}>
        <img src={imageSrc} />
      </div>
      <div className={`flex-column-center ${styles.cardTextWrapper}`}>
        <div>{heading}</div>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default Card

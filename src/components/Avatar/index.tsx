import { FC } from 'react'

import styles from './index.module.scss'

const Avatar: FC = () => {
  return (
    <div className={styles.avatar_container}>
      <img
        height="60px"
        src="https://w7.pngwing.com/pngs/503/620/png-transparent-avocado-juice-fruit-vegetable-guacamole-avocado-natural-foods-food-smoothie-thumbnail.png"
      />
      <div>Masha</div>
    </div>
  )
}

export default Avatar

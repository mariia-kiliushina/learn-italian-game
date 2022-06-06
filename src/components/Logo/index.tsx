import { FC } from 'react'

import flagImg from '../../../public/images/italy-96.png'

const LogoSmall: FC = () => {
  return (
    <div className="logo flex-column-center">
      <h3>Learn Italian</h3>
      <p>playing</p>
      <a href="">
        <img src={flagImg} height="60px" />
      </a>
    </div>
  )
}

const LogoMedium: FC = () => {
  return (
    <div className="logo flex-column-center">
      <h2>Learn Italian</h2>
      <h3>playing</h3>
      <a href="">
        <img src={flagImg} height="60px" />
      </a>
    </div>
  )
}

const LogoLarge: FC = () => {
  return (
    <div className="logo flex-row-center">
      <div className="flex-column-center">
        <h1>Learn Italian</h1>
        <div className="flex-row-center">
          <h3>playing</h3>
          <a href="">
            <img src={flagImg} height="60px" />
          </a>
        </div>
      </div>
      {/* <div>
        <a href="">
          <img src={flagImg} height="60px" />
        </a>
      </div> */}
    </div>
  )
}

export { LogoSmall, LogoMedium, LogoLarge }

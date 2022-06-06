import { FC } from 'react'

type Props = {
  name: string
  color: string
  size: number
}

const Icon: FC<Props> = ({ name, color, size }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use href={`../../public/images/${name}`} />
  </svg>
)

export default Icon

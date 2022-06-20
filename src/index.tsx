import { createRoot } from 'react-dom/client'

import App from './App'
import './boot.ts'
import './index.scss'

const container = document.querySelector('#root')
if (container !== null) {
  const root = createRoot(container)
  root.render(<App />)
} else null

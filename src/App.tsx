import { FC } from 'react'

import CardsContainer from './components/CardsContainer'
import Footer from './components/Footer'
import Header from './components/Header'

const App: FC = () => {
  return (
    <div className="primary-background">
      <Header />

      <CardsContainer />

      <Footer />
    </div>
  )
}

export default App

import { FC } from 'react'

import CardsContainer from './components/CardsContainer'
import Footer from './components/Footer'
import Header from './components/Header'

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <CardsContainer />
      </main>
      <Footer />
    </>
  )
}

export default App

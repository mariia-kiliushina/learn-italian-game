import { FC } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import About from '#components/About'
import Learn from '#components/Learn'
import Support from '#components/Support'
import Train from '#components/Train'
import WelcomingPage from '#components/WelcomingPage'

import Footer from './components/Footer'
import Header from './components/Header'

const App: FC = () => {
  return (
    <div className="primary-background full-height grid_main_layout">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomingPage />} />
          <Route path="learn" element={<Learn />} />
          <Route path="train" element={<Train />} />
          <Route path="about" element={<About />} />
          <Route path="support" element={<Support />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App

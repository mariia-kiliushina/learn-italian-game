import { FC } from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import About from '#components/About'
import Learn from '#components/Learn'
import Profile from '#components/Profile'
import Train from '#components/Train'
import WelcomingPage from '#components/WelcomingPage'

// import book from '../public/images/book.png'
// import brain from '../public/images/brain.png'
// import glasses from '../public/images/glasses.png'
// import handWithPen from '../public/images/hand-with-pen.png'
// import hands from '../public/images/hands.png'
// import study from '../public/images/study.png'
import Footer from './components/Footer'
import Header from './components/Header'
import { store } from './redux/store'

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="primary-background full-height grid-main-layout">
          <Header />
          <Routes>
            <Route path="/" element={<WelcomingPage />} />
            <Route path="learn" element={<Learn />} />
            <Route path="train" element={<Train />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App

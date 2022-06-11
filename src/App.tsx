import { FC } from 'react'
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

const App: FC = () => {
  return (
    <div className="primary-background full-height grid_main_layout pictures">
      <Router>
        {/* <img className="backImage1" src={book} alt="" height="64px" />
        <img className="backImage2" src={brain} alt="" height="64px" />
        <img className="backImage3" src={hands} alt="" height="64px" />
        <img className="backImage4" src={glasses} alt="" height="64px" />
        <img className="backImage5" src={handWithPen} alt="" height="64px" />
        <img className="backImage6" src={study} alt="" height="64px" /> */}
        <Header />
        <Routes>
          <Route path="/" element={<WelcomingPage />} />
          <Route path="learn" element={<Learn />} />
          <Route path="train" element={<Train />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App

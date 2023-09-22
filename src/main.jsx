import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Navbar from './Components/Navbar'
import BannerSection from './Components/BannerSection'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <BannerSection />
  </React.StrictMode>
)

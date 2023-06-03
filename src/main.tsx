import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LandingPage from './Pages/LandingPage.tsx'
import Home from './Pages/Home.tsx'
import Register from './Pages/Register.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import AddInfo from './components/AddInfo.tsx'

library.add()



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route path='/' Component={App}/> */}
        <Route path='/' Component={Home}/>
        {/* <Route path='/' Component={LandingPage}/> */}
        <Route path='/register' Component={Register}/>
        <Route path='/addInfo'  Component={AddInfo}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)

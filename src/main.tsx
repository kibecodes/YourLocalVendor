import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LandingPage from './Pages/LandingPage.tsx'

import { library } from '@fortawesome/fontawesome-svg-core'

library.add()



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App/> */}
    <LandingPage/>
  </React.StrictMode>,
)

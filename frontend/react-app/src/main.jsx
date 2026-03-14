import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/reset.css'
import Home from './components/pages/home/Home.jsx'
import Tour from './components/pages/tour/Tour.jsx'
import Layout from './containers/Layout.jsx'
import {TourProvider} from './context/TourContext.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <TourProvider>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="tours" element={<Tour />} />
          </Route>
      </Routes>
    </TourProvider>
  </BrowserRouter>
)

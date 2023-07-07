import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import VideoList from './components/Videos/VideoList'
import VideoForm from './components/Videos/VideoForm'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    
    <BrowserRouter>

    
   
    <Navbar/>

   
      <Routes>
       
       
     
        <Route path="/" element={<VideoList/>}/>
      
        <Route path="/new-video" element={<VideoForm/>}/>
        <Route path="/update/:id" element={<VideoForm/>}/>
        
      </Routes>
      <ToastContainer />
    
      
    </BrowserRouter>
    
    
  </React.StrictMode>,
)

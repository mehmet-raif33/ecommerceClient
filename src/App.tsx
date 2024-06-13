import './App.css'
import { MainLayer } from './Pages/MainLayer'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
/*
import { createBrowserRouter } from 'react-router-dom'
import ProfilePage from './components/ProfilePage.tsx'
import Home from './components/Home.tsx'
import { useState , useEffect } from 'react' */

/* const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayer />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/home',
    element: <Home />
  }
]) */

function App() {


  return (
    <>
      <Navbar />
           <MainLayer />
      <Footer />
      
    </>
  )

}

export default App

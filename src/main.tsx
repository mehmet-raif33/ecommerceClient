import ReactDOM from 'react-dom/client'
import './index.css'
import store from './redux/Store.ts'
import { Provider } from 'react-redux'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import ProfilePage from './components/ProfilePage.tsx'
import { MainLayer } from './Pages/MainLayer.tsx'
import { Navbar } from './components/Navbar.tsx'
import { Footer } from './components/Footer.tsx'
import Home from './components/Home.tsx'

const router = createBrowserRouter([
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
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Navbar />
      <RouterProvider router={router}/>
    <Footer />
  </Provider>,
)

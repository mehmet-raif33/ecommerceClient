import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import ProfilePage from './components/ProfilePage.tsx'
import { MainLayer } from './Pages/MainLayer.tsx'
import { Navbar } from './components/Navbar.tsx'
import { Footer } from './components/Footer.tsx'
import Home from './components/Home.tsx'
import { Navigate } from 'react-router-dom'
import Login from './components/Login.tsx'
import store from './redux/Store.ts'

const state = store.getState();

const PrivateRoute = ({ children }) => {
  return state.userData.isHere ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayer /> 
  },
  {
    path: '/profile',
    element: 
      <PrivateRoute>
        <ProfilePage />
      </PrivateRoute>
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <Provider store={store}>
        <Navbar />
          <RouterProvider router={router}/>
        <Footer />
    </Provider>

)

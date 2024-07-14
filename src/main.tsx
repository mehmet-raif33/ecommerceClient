import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRouter from './Routers/Route.tsx'
import { Provider } from 'react-redux'
import { AppStore } from './redux/Store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={AppStore}>
    <RouterProvider router={MainRouter} />    
  </Provider>

)

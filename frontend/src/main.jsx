import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import router from './router/Router'
import './assets/css/Inicio.css'
import './assets/css/navbar/font-awesome.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
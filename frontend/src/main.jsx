import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainContext from './Contexts/MainContext.jsx'

createRoot(document.getElementById('root')).render(
  <MainContext>
    <App />
  </MainContext>,
)

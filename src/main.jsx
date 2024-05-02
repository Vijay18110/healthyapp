import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/healthyapp.css'


// import './index.css'
import Healthyapp from './components/healthyapp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Healthyapp></Healthyapp>
  </React.StrictMode>,
)

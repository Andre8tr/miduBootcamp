import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Menu from './components/Menu.jsx'
import RenderColection from './components/RenderColection'
import { Fetching } from './components/Fetching'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <RenderColection />
    <Fetching />
  </React.StrictMode>,
)

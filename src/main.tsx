import React from 'react'
import ReactDOM from 'react-dom/client'

import Rotas from './routes.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Rotas></Rotas>
  </React.StrictMode>,
)

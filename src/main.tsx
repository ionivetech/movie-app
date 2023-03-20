import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { BrowserRouter } from 'react-router-dom'
// Stores
import { Provider } from 'react-redux'
import Store from 'stores/Store'

import './assets/css/main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

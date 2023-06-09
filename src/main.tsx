import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Navigation from './global/Navigation.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navigation />
    <App />
  </React.StrictMode>,
)

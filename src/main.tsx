import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/css/index.css'
import App from './App.tsx'
import * as appActions from "./actions/app.ts"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

appActions.register()
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {AppRoot} from "@vkontakte/vkui";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <AppRoot mode={"partial"}>
          <App />
      </AppRoot>
  </React.StrictMode>,
)

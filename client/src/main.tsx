import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import {BrowserRouter} from "react-router-dom"
import { GuardAuthProvider } from './providers/GuardAuthProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <GuardAuthProvider>
          <App />
        </GuardAuthProvider>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
)

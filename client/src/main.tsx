import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import { GuardAuthProvider } from './providers/guardAuth/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <BrowserRouter>
          <GuardAuthProvider>
            <App />
          </GuardAuthProvider>
        </BrowserRouter>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>,
)

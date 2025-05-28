import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MainContextProvider } from './contexts/MainContext.jsx'
import { DataContextProvider } from './contexts/DataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataContextProvider>
      <MainContextProvider>
        <App />
      </MainContextProvider>  
    </DataContextProvider>
     
  </StrictMode>,
)

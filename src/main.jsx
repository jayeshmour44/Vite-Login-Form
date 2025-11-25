import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { UserProvider } from './Context/UserContext.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import { UserDetailsProvider } from './Context/UserDetailsContext.jsx'

createRoot(document.getElementById('root')).render(
<React.StrictMode>


  <UserProvider>
    <UserDetailsProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </UserDetailsProvider>
   </UserProvider>


</React.StrictMode>
)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/Store'
import SetReminder from './components/SetReminder'
import Home from './components/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'                                                                                                                                                                                                                                                                                                                                       
import Login from './components/Login'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Login/>,
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/set-rem",
      element:<SetReminder/>
    }
  ])




  return (
    <Provider store={store}>
      <RouterProvider router={router}>
      
      </RouterProvider>
    </Provider>
    
  )
}

export default App

import React from 'react'
import { BrowserRouter } from 'react-router-dom';

//routes
import { AppRoutes } from './Routes/AppRoutes';

//styles
import './Sass/App.scss';


function App() {
 

  return (
    <BrowserRouter>

      <AppRoutes></AppRoutes>
      
    </BrowserRouter>
  )
}

export default App

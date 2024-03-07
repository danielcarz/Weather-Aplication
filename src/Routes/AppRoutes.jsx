import React, { useEffect, useState } from "react";

import {  Routes, Route, } from "react-router-dom";

//pages
import { MainPage } from '../Pages/index';

//context
import { ContexProvider } from '../Components/Hooks/Contex/ProviderContext'; 


export const AppRoutes = () => {
 
   

    return (  
      
        <ContexProvider> 

            <Routes>
                <Route path="/" element= { <MainPage></MainPage> }></Route>

            </Routes>


 
        </ContexProvider>
            
        
      
    )
}
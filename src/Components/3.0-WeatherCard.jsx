import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from './Hooks/Contex/CreateContext';

//wrappers components
import { CurrentWeather } from './WrappersComponents/index.js';


//styles


export const WeatherCard = () => {

    
    const { weatherArrayInfo } = useContext( Contex );

   
  
 
    console.log( weatherArrayInfo ) 
 
    
    
     
   return ( 
        <>
            <CurrentWeather></CurrentWeather>
        
        </>
); 

    



};
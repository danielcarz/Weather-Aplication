import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from './Hooks/Contex/CreateContext.jsx';

//wrappers components
import { FormCountry, CurrentWeather, PastWeatherState } from './WrappersComponents/index.js';

 
//styles


export const WeatherCard = () => {

    
    const { weatherArrayInfo } = useContext( Contex );

   
   
 
    //console.log( weatherArrayInfo )  
 
    
    
     
   return ( 
        <>
            <FormCountry></FormCountry>
            <CurrentWeather></CurrentWeather>
            <PastWeatherState></PastWeatherState>
        
        </>
); 

    



};
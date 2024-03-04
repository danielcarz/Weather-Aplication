import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from './Hooks/Contex/CreateContext.jsx';

//wrappers components
import { FormCountry, CurrentWeather, PredictionWeatherState } from './WrappersComponents/index.js';

 
//styles


export const WeatherCard = () => {

    
    const { weatherArrayInfo, nextDays } = useContext( Contex );
 
   
    
 
    //console.log( weatherArrayInfo )  
  
    
    
     
   return ( 
        <>
            <FormCountry></FormCountry>
            <CurrentWeather></CurrentWeather>

            <h4> predictions for next week</h4> 
            
            { 
                
                nextDays.map( ( item, index ) => ( 
                <PredictionWeatherState key={index} valueDay={item.valueDay}>

                </PredictionWeatherState> 
            
            ) ) }
        
        </>
); 

    



};
import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from './Hooks/Contex/CreateContext.jsx';

//wrappers components
import { FormCountry, CurrentWeather, ParentPredictionWeatherState, PredictionWeatherState } from './WrappersComponents/index.js';

 
//styles


export const WeatherCard = () => {

    
    const { weatherArrayInfo, nextDays } = useContext( Contex );
 
    
     
 
    //console.log( weatherArrayInfo )  
  
    
    
     
   return ( 
        <>
            <FormCountry></FormCountry>
            <CurrentWeather></CurrentWeather>


            <ParentPredictionWeatherState>

                { 
                    
                    nextDays.map( ( item, index ) => ( 
                        <PredictionWeatherState key={index} valueDay={item.valueDay}> </PredictionWeatherState> 
                
                    ))
                }



            </ParentPredictionWeatherState>
            
          
        
        </>
); 

    



};
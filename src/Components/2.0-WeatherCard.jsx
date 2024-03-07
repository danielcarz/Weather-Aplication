import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from './Hooks/Contex/CreateContext.jsx';

//wrappers components
import { FormCountry, CurrentWeather, ParentPredictionWeatherState, PredictionWeatherState } from './WrappersComponents/index.js';

 
//styles


export const WeatherCard = () => {

    
    const { nextDays, midnightTemperatures, maidNightStatus } = useContext( Contex );
    
    const [ predictionsWeather, setPredictionsWeather ] = useState( [ nextDays, midnightTemperatures ] );
    const [ weatherInfo, setWeatherInfo ] = useState( [ ] )
    
    useEffect(() => {

        const nuevosObjetos = nextDays.flatMap((item, index) => ({

            day: item.valueDay,
            temperature: midnightTemperatures[index], // Assuming midnightTemperatures is an array
            status: maidNightStatus[index],

        }));

        setWeatherInfo( nuevosObjetos );

    }, [nextDays, midnightTemperatures]);

   

 
    
      
 
    //console.log( weatherArrayInfo )   valueTemperature = {item.temperature} 
    //console.log( weatherInfo[0].temperature.midnigh_temp ) 
    
    
     
   return ( 
        <>
            <FormCountry></FormCountry>
            <CurrentWeather></CurrentWeather>
 
 
            <ParentPredictionWeatherState>

                { 
                    
                    weatherInfo.map( ( item, index ) => ( 
                        <PredictionWeatherState key={index} weatherStatus = { weatherInfo[index].status }  valueDay={item.day} valueTemperature={ weatherInfo[index].temperature ?  weatherInfo[index].temperature.midnigh_temp : ''} >  </PredictionWeatherState> 
                
                    ))
                }



            </ParentPredictionWeatherState>
            
          
        
        </>
); 

    



};
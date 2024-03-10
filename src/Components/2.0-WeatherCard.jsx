import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from './Hooks/Contex/CreateContext.jsx';

//wrappers components
import { FormCountry, CurrentWeather, ParentPredictionWeatherState, PredictionWeatherState } from './WrappersComponents/index.js';

 
//styles


export const WeatherCard = () => {

    
    const { nextDays, midnightTemperatures, maidNightStatus, maidnight_images } = useContext( Contex );
    
    const [ predictionsWeather, setPredictionsWeather ] = useState( [ nextDays, midnightTemperatures ] );
    const [ weatherInfo, setWeatherInfo ] = useState( [ ] )
    
    useEffect(() => {

        const midnight_objectInfo = nextDays.flatMap((item, index) => ({

            day: item.valueDay,
            temperature: midnightTemperatures[index], // Assuming midnightTemperatures is an array
            status: maidNightStatus[index],
            image: maidnight_images[ index ].imageStateWeather 

        })); 

        setWeatherInfo( midnight_objectInfo );

    }, [nextDays, midnightTemperatures]);

   
    console.log( weatherInfo )
     
   return ( 
        <>
            <FormCountry></FormCountry>
            <CurrentWeather></CurrentWeather>
 
 
            <ParentPredictionWeatherState>

                { 
                    
                    weatherInfo.map( ( item, index ) => ( 
                        <PredictionWeatherState key={index} weatherImage = { weatherInfo[index].image } weatherStatus = { weatherInfo[index].status }  valueDay={item.day} valueTemperature={ weatherInfo[index].temperature ?  weatherInfo[index].temperature.midnigh_temp : ''} >  </PredictionWeatherState> 
                
                    )) 
                }



            </ParentPredictionWeatherState>
            
          
        
        </>
); 

    



};
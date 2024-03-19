import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from './Hooks/Contex/CreateContext.jsx';

//wrappers components
import { FormCountry, CurrentWeather } from './WrappersComponents/index.js';

 
//styles
//import '.'
 
export const WeatherCard = () => {

    //midnightTemperatures:
    const { nextDays,  midnight_celcius, maidNightStatus, maidnight_images } = useContext( Contex );
    
    const [ predictionsWeather, setPredictionsWeather ] = useState( [ nextDays, midnight_celcius ] );
    const [ weatherInfo, setWeatherInfo ] = useState( [ ] )
    
    useEffect(() => {

        const midnight_objectInfo = nextDays.flatMap((item, index) => ({

            day: item.valueDay,
            temperature: midnight_celcius[index], 
            status: maidNightStatus[index],
            image: maidnight_images[ index ]

        })); 

        setWeatherInfo( midnight_objectInfo );

    }, [nextDays, midnight_celcius]);


 
     
   return ( 
        <div className="currentWrapperContainer">

            <FormCountry></FormCountry>

            <CurrentWeather></CurrentWeather> 
          
        
        </div>
); 

    



};
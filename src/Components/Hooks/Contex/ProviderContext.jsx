/*
'https://api.openweathermap.org/data/2.5/forecast?q=bogota,co&appid=389f893e1c972644360ed8df4b834963'

*/

import { useEffect, useState } from 'react'

//context
import { Contex } from './CreateContext';

//custom hooks 
import { useFetchApi, useHandleForms,  useGetWeatherImage, useGetCentigrades, useGetCurrentDate, useGetDataFromApi } from '../CustomHooks/index';




 
export const ContexProvider = ( { children } ) => {
 

//FORMS
    const { inputValue, pais, handleInputChange, handleSubmit, isNewValue, setIsNewValue } = useHandleForms( );
    //console.log( isNewValue );
 

//WEATHER ARRAY INFO 
    const [weatherObjectsInformation, setWeatherObjectsInformation] = useState( { midnightTemperatures: [ ] }  );

    const { midnightTemperatures } = weatherObjectsInformation;

     midnightTemperatures.map( prop => { console.log(prop) } )

    console.log(midnightTemperatures)
  

//FETCH   
    useEffect( ( ) => {

         
        useGetDataFromApi( pais, useFetchApi )
            .then( ( weatherData ) => { 
                

                if( weatherData ) { setWeatherObjectsInformation(  { ...weatherData, midnightTemperatures : weatherData.midnightTemperatures } ) };

             } );
          
         
        
 
    }, [ pais, isNewValue ]);  

   
//WEATHER IMAGE 
    const {  imageStateWeather } = useGetWeatherImage( weatherObjectsInformation.weatherCondition, weatherObjectsInformation.weatherDescription );

 
//WEATHER CELCIUS
    const GetCelcius = useGetCentigrades( weatherObjectsInformation.temperature );


//CURRENT DATE
    const { currentDate, nextDaysArray, nextDays } = useGetCurrentDate( );

//MIDNIGHT ARRAY TEMPERATURE

    
    
    
    
    return(  
        <Contex.Provider value = { 
  
            {   
               //WEATHER ARRAY INFO
                weatherInformation: weatherObjectsInformation,
                GetCelcius, 

                //forms
                inputValue,
                handleInputChange,
                handleSubmit,

                //weather image
                useGetWeatherImage,
                imageStateWeather,

                //current date
                currentDate,
                nextDaysArray,
                nextDays
                  
            }
            
            
        } >

            {children}
            
        </Contex.Provider>
    )
}
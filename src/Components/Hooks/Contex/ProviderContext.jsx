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
    const [weatherArrayInfo, setWeatherArrayInfo] = useState( [ ] );
    console.log(weatherArrayInfo)

//FETCH
 
    useEffect( ( ) => {

        
        useGetDataFromApi( pais, useFetchApi )
            .then( ( weatherData ) => { 
                

                if( weatherData ) { setWeatherArrayInfo( weatherData ); };

             } );
          
         
        

    }, [ pais, isNewValue ]);  

   
//WEATHER IMAGE 
    const { imageWeather } = useGetWeatherImage( weatherArrayInfo.weatherCondition, weatherArrayInfo.weatherDescription );

 
//WEATHER CELCIUS
    const GetCelcius = useGetCentigrades( weatherArrayInfo.temperature );

//CURRENT DATE
    const { currentDate, nextDaysArray, nextDays } = useGetCurrentDate( );

    // const getCurrentDate = useGetCurrentDate(  );


    
  
    
    return(  
        <Contex.Provider value = { 
  
            {   
               //WEATHER ARRAY INFO
                weatherArrayInfo,
                GetCelcius, 

                //forms
                inputValue,
                handleInputChange,
                handleSubmit,

                //weather image
                useGetWeatherImage,
                imageWeather,

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
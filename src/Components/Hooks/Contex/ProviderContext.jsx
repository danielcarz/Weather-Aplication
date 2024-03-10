/*
'https://api.openweathermap.org/data/2.5/forecast?q=bogota,co&appid=389f893e1c972644360ed8df4b834963'

*/

import { useEffect, useState } from 'react'

//context
import { Contex } from './CreateContext';

//custom hooks 
import { useFetchApi, useHandleForms,  useGetWeatherImage, useGetCentigrades, useGetCurrentDate, useGetDataFromApi } from '../CustomHooks/index';




 
export const ContexProvider = ( { children } ) => {
    
    
//WEATHER ARRAY INFO 
    const [weatherObjectsInformation, setWeatherObjectsInformation] = useState( { midnightTemperatures: [ ], midnightDates: [ ] }  );
    console.log( weatherObjectsInformation )
        


//FORMS
    const { inputValue, pais, handleInputChange, handleSubmit, isNewValue, setIsNewValue } = useHandleForms( );


    //console.log( isNewValue );
    
//FETCH   
    useEffect( ( ) => {

            
        useGetDataFromApi( pais, useFetchApi )
            .then( ( weatherData ) => { 
                

                if( weatherData ) { setWeatherObjectsInformation(  { ...weatherData, midnightTemperatures : weatherData.midnightTemperatures } ) };

                } );
            
            
        
    
    }, [ pais, isNewValue ]);  

        
//WEATHER IMAGE 
    const {  imageStateWeather } = useGetWeatherImage( weatherObjectsInformation.weatherCondition, weatherObjectsInformation.weatherDescription );
    console.log( weatherObjectsInformation.midnightTemperatures )

    const maidnight_images =   weatherObjectsInformation.midnightTemperatures.map( item =>  useGetWeatherImage( item.midnight_main, item.midnight_description )  )  
    console.log( maidnight_images )

//WEATHER CELCIUS
    const GetCelcius = useGetCentigrades( weatherObjectsInformation.temperature );

    

//CURRENT DATE

    const { currentDate, nextDaysArray, nextDays } = useGetCurrentDate( );


        
//MIDNIGHT ARRAY TEMPERATURE
    
    const { midnightTemperatures, midnightDates } = weatherObjectsInformation;

    const midnightWeather =  midnightDates.map( item => item.weather );
    const combinedWeather = midnightWeather.flat();

    const maidNightStatus =  combinedWeather.map( item => item.main );
    

   
 
    
 
   
    
    
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
                nextDays,

                
                //midnight temperatures
                midnightTemperatures,
                maidNightStatus,
                maidnight_images, 
                

            }
            
            
        } >

            {children}
            
        </Contex.Provider>
    )
}
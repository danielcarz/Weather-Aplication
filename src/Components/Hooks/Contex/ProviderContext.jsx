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
   

//FETCH

  /*   const getFetchData = ( pais ) => {

        return useFetchApi( pais )
 
            .then( data => {
 
               
 
                const [ { cod, city, list } ] = [ data ];
                //console.log( 'data', cod ); 


                //extracting weather info
                const { id, name } = city; 

                const [ { main, wind, dt_txt, rain, weather, pop } ] = list ;
                 
                const { speed } = wind;
                                  
                const { temp, humidity } = main;

                const { main: weatherMain, description } = weather[0]; 


                //console.log( 'description', description )
              
   
                return   { 
                  id: id, code: cod,

                    nameCity: name,
                  
                    date: dt_txt,

                    temperature: temp, 

                    humi: humidity, 

                    speedWint: speed,

                    rain: rain,
                    pop: pop,

                    conditionsInfo: weather,
                    weatherCondition: weatherMain,
                    weatherDescription: description 

                }   ;
                

            })
            .catch((error) => {
                // Promise rejected, handle the error
                console.error('Error fetching weather data:', error);
              });

    } */

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
    const { currentDate, nextDaysArray } = useGetCurrentDate( );

    // const getCurrentDate = useGetCurrentDate(  );

//TESTING
    
 
    
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
                nextDaysArray
                  
            }
            
            
        } >

            {children}
            
        </Contex.Provider>
    )
}

import { useEffect, useState } from 'react'

//context
import { Contex } from './CreateContext';

//custom hooks 
    import { 
            useFetchApi,

            useHandleForms,

            useGetWeatherImage,

            useGetCentigrades,

            useGetCurrentDate,
            
            useGetDataFromApi } from '../CustomHooks/index';




 
export const ContexProvider = ( { children } ) => {
    
    
//WEATHER ARRAY INFO 
    const [weatherObjectsInformation, setWeatherObjectsInformation] = useState( { midnightTemperatures: [ ], midnightDates: [ ] }  );
    console.log( weatherObjectsInformation )
        


// FOMRS: varaibles and fucntions to handle forms 
    const { inputValue, pais, handleInputChange, handleSubmit, isNewValue, setIsNewValue } = useHandleForms( );

    
// GET DATA FROM API: useGetDataFromAPI () 
    useEffect( ( ) => {

            
        useGetDataFromApi( pais, useFetchApi )

            .then( ( weatherData ) => { 
                

                if( weatherData ) { setWeatherObjectsInformation(  { ...weatherData, midnightTemperatures : weatherData.midnightTemperatures } ) };

                } );
            
            
        
    
    }, [ pais, isNewValue ]);  

        
//WEATHER IMAGE 
    const {  imageStateWeather, windStatusImage, uvIndexGif,sunsetgift, windgift } = useGetWeatherImage( weatherObjectsInformation.weatherCondition, weatherObjectsInformation.weatherDescription );
    console.log( weatherObjectsInformation.midnightTemperatures )

    const maidnight_images =   weatherObjectsInformation.midnightTemperatures.map( item =>  useGetWeatherImage( item.midnight_main, item.midnight_description )  )  
    console.log( maidnight_images )

    
//CURRENT DATE   
    const { currentDate, nextDaysArray, nextDays } = useGetCurrentDate( );
    
    
    
//MIDNIGHT ARRAY TEMPERATURE 
    const { midnightTemperatures, midnightDates } = weatherObjectsInformation;

    const midnightWeather =  midnightDates.map( item => item.weather );
    const combinedWeather = midnightWeather.flat();
    const maidNightStatus =  combinedWeather.map( item => item.main );

    
    
//WEATHER CELCIUS
    const GetCelcius = useGetCentigrades( weatherObjectsInformation.temperature );
    const midnight_celcius = weatherObjectsInformation.midnightTemperatures.map( item => useGetCentigrades( item.midnigh_temp )  )
    

    
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
                midnight_celcius,
                
                //wind status
                windStatusImage,
                uvIndexGif,
                sunsetgift, 
                windgift, 
               
                

            }
            
            
        } >

            {children}
            
        </Contex.Provider>
    )
}
/*
'https://api.openweathermap.org/data/2.5/forecast?q=bogota,co&appid=389f893e1c972644360ed8df4b834963'

*/

import { useEffect, useState } from 'react'

//context
import { Contex } from './CreateContext';

//custom hooks 
import { fetchApi, handleForms, weatherImageSelected, GetCentigrades } from '../CustomHooks/index';

 
 

export const ContexProvider = ( { children } ) => { 

//FORMS
    const { inputValue, pais, handleInputChange, handleSubmit, isNewValue, setIsNewValue } = handleForms( );
    //console.log( isNewValue );


//WEATHER ARRAY INFO 
    const [weatherArrayInfo, setWeatherArrayInfo] = useState( [ ] );
    //console.log( 'iinfo', weatherArrayInfo );

//FETCH

    useEffect( ( ) => {

        fetchApi( pais )

            .then( data => {

               
 
                const [ { cod, city, list } ] = [ data ];
                console.log( 'data', data );

                //extracting weather info
                const { id, name } = city; 

                const [ { main, wind, dt_txt, rain, weather, pop } ] = list ;
                 
                const { speed } = wind;
                                 
                const { temp, humidity } = main;

                const { main: weatherMain } = weather[0];


                console.log( 'description', weatherMain )
              
   
                setWeatherArrayInfo (  { 
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

                }  );
                

            });

          
         
        

    }, [ isNewValue ]); 

   
//WEATHER IMAGE 
    weatherImageSelected( weatherArrayInfo.temperature  );


//WEATHER CELCIUS
    const GetCelcius = GetCentigrades( weatherArrayInfo.temperature );

    
    return(  
        <Contex.Provider value = { 
 
            {   
               //WEATHER ARRAY INFO
                weatherArrayInfo,
                GetCelcius,

                //forms
                inputValue,
                handleInputChange,
                handleSubmit
                  
            }
            
            
        } >

            {children}
            
        </Contex.Provider>
    )
}
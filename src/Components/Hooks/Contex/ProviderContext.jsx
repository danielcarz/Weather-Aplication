/*
'https://api.openweathermap.org/data/2.5/forecast?q=bogota,co&appid=389f893e1c972644360ed8df4b834963'

*/

import { useEffect, useState } from 'react'

//context
import { Contex } from './CreateContext';

//custom hooks
import { fetchApi } from '../CustomHooks/FetchApi';




export const ContexProvider = ( { children } ) => {

//FETCH

    const [weatherArrayInfo, setWeatherArrayInfo] = useState( [ ] );

    useEffect( ( ) => {

        fetchApi()
            .then( data => {

                setWeatherArrayInfo( [ data ] );
            });
    }, []);
   

  
    return(  
        <Contex.Provider value = { 

            { 
               
                weatherArrayInfo
                 
            }
            
            
        } >

            {children}
            
        </Contex.Provider>
    )
}
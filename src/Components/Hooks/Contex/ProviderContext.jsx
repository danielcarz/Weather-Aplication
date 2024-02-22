/*
'https://api.openweathermap.org/data/2.5/forecast?q=bogota,co&appid=389f893e1c972644360ed8df4b834963'

*/

import { useEffect, useState } from 'react'

//context
import { Contex } from './CreateContext';

//custom hooks 
import { fetchApi, handleForms } from '../CustomHooks/index';




export const ContexProvider = ( { children } ) => { 

//FORMS
    const { inputValue, pais, handleInputChange, handleSubmit, dependecy, setDependency } = handleForms( );

//FETCH

    const [weatherArrayInfo, setWeatherArrayInfo] = useState( [ ] );
   

    useEffect( ( ) => {

        fetchApi( pais )
            .then( data => {

                setWeatherArrayInfo( [ data ] );
            });
        
        

    }, [ dependecy ]); 
   

  
    return(  
        <Contex.Provider value = { 
 
            {  
               //fetch
                weatherArrayInfo,

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
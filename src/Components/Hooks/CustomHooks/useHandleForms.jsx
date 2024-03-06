import React, { useState } from "react";

    //styles

    export const useHandleForms =  () => {

        const [inputValue, setInputValue] = useState('');

        const [countries, setCountries] = useState( 'colombia' );
    
        const [ isNewValue, setIsNewValue ] = useState( false )
    
    
        const handleInputChange = (event) => {
    
            const value = event.target.value;
            setInputValue(value); 

          
        };  
        
    
        const handleSubmit = ( event ) => {
            
            event.preventDefault();
            
            setCountries(inputValue); 

            setIsNewValue( !isNewValue );
    
           
        };

        return {

            inputValue,

            pais: countries,

            handleInputChange,

            handleSubmit,

            isNewValue
        }
    };


import React, { useState } from "react";

    //styles

    export const handleForms =  () => {

        const [inputValue, setInputValue] = useState('');

        const [pais, setPais] = useState('');
    
        const apiKey = '389f893e1c972644360ed8df4b834963'; // Coloca tu API key aquí

        const [ isNewValue, setIsNewValue ] = useState( false )
    
    
        const handleInputChange = (event) => {
    
            const value = event.target.value;
            setInputValue(value);

            
    
          
        };  
        
    
        const handleSubmit = () => {
    
            setPais(inputValue); 

            setIsNewValue( !isNewValue );
    
           
        };

        return {

            inputValue,

            pais,

            handleInputChange,

            handleSubmit,

            isNewValue
        }
    };


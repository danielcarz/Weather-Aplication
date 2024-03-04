import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//styles


export const FormCountry = () => {

    
    const { inputValue, handleInputChange, handleSubmit } = useContext( Contex );

   

     
    return (
        <form onSubmit={ handleSubmit } >
           
            <input

                type="text"
                placeholder=" Clima en tu ciudad o pais " 
                value={inputValue}

                onChange={handleInputChange}
              
            />
          
             
        </form>
    );  

    



}
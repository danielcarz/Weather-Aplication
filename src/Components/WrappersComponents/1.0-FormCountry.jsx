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
                placeholder=" Weather in your city or country " 
                value={inputValue}

                onChange={handleInputChange}
              
            />
           
             
        </form>
    );  

    



}
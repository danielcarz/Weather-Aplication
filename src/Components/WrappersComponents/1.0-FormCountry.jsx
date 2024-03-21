import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//styles
import '../../Sass/Components/WrappersComponents/Form.scss';

export const FormCountry = () => { 
 
    
    const { inputValue, handleInputChange, handleSubmit } = useContext( Contex );

   

     
    return (
        <form  className="form" onSubmit={ handleSubmit } >
           
            <input
                className="input"
                type="text"
                placeholder=" Weather in your city or country " 
                value={inputValue}

                onChange={handleInputChange}
              
            />
           
             
        </form>
    );  

    



}
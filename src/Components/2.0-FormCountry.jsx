import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from './Hooks/Contex/CreateContext';


//styles


export const ComponentOne = () => {

    
    const { inputValue, handleInputChange, handleSubmit, weatherArrayInfo } = useContext( Contex );

    

    
    return (
        <div>
            <h1>Buscador de países</h1>
            <input 
                type="text"
                placeholder=" Clima en tu ciudad o pais " 
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={ () => handleSubmit() }>Obtener clima</button> 
             
        </div>
    );  

    



}
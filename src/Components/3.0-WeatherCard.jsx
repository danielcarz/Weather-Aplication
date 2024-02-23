import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from './Hooks/Contex/CreateContext';


//styles


export const WeatherCard = () => {

    
    const { weatherArrayInfo } = useContext( Contex );

   
  
 
    //console.log( weatherArrayInfo ) 
 
    
    
     
   return ( 
    <h1>weather card</h1>
); 

    



};
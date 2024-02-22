import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from './Hooks/Contex/CreateContext';


//styles


export const WeatherCard = () => {

    
    const { weatherArrayInfo } = useContext( Contex );

    
    if( weatherArrayInfo[0] ){
        console.log( weatherArrayInfo[0].city  )
    }
    
    
    return (
        <div>

            
             
        </div>
    );  

    



};
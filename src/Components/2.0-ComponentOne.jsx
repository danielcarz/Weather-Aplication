import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from './Hooks/Contex/CreateContext';


//styles


export const ComponentOne = () => {

    
    const { weatherArrayInfo } = useContext( Contex );

    console.log( weatherArrayInfo ) 

    return(

        <h1> Component One </h1>
    ) 

    



}
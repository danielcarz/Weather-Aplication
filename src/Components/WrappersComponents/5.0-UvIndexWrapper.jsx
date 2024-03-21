import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';

//child
import { UvIndex } from './5.1-UvIndex';
import { Visibility } from "./5.2-Visibility";


//styles
import '../../Sass/Components/WrappersComponents/5.0-UvIndexWrapper.scss';

export const UvIndexWrapper = () => {

    const  { uvIndexGif, weatherInformation} = useContext( Contex );

    console.log( weatherInformation )

 
    return (
              
       <div className="uvIndexContainer">

            <UvIndex uvIndexImage = { uvIndexGif }></UvIndex>

            <Visibility></Visibility>
            
       </div>
    );  

    



}
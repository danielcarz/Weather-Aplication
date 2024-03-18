import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//childs
import { Sunrise } from './6.1-Sunrise.jsx';
import { FeelsLike } from "./6.2-FeelsLike.jsx";


//styles
import '../../Sass/Components/WrappersComponents/6.0-sunriseWrapper.scss';

export const SunriseWrapper = () => {

    const  { sunsetgift} = useContext( Contex );
     
    return (
       <div className="sunriseContainer" > 

            <Sunrise sunsetImage = { sunsetgift }></Sunrise>
             
            <FeelsLike></FeelsLike> 
            
       </div>
    );  

    



}
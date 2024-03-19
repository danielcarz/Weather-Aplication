import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//childs
import { Sunrise } from './6.1-Sunrise.jsx';
import { FeelsLike } from "./6.2-FeelsLike.jsx"; 


//styles
import '../../Sass/Components/WrappersComponents/6.0-sunriseWrapper.scss';

export const SunriseWrapper = () => {  

    const  { weatherInformation, sunsetgift, feelsLike_celcius, midnight_celcius, celciusIcon } = useContext( Contex );
    
    const {  sea_level, population, Atmosphericpressureatsealevel } = weatherInformation;
    console.log( celciusIcon )   

    return ( 
       <div className="sunriseContainer" >  

            <Sunrise sunsetImage = { sunsetgift } sealevel= { sea_level } population = { population } Atmosphericpressure = { Atmosphericpressureatsealevel } ></Sunrise>
             
            <FeelsLike feelsLike = { feelsLike_celcius } celciusIcon = { celciusIcon } ></FeelsLike> 
            
       </div>
    );  
 
    



}
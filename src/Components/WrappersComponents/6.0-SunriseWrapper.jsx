import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//childs
import { Sunrise } from './6.1-Sunrise';
import { FeelsLike } from "./6.2-FeelsLike";


//styles
import '../../Sass/Components/WrappersComponents/6.0-sunriseWrapper.scss';

export const SunriseWrapper = () => {


     
    return (
       <div className="sunriseContainer" >

            <Sunrise></Sunrise>
            
            <FeelsLike></FeelsLike> 
            
       </div>
    );  

    



}
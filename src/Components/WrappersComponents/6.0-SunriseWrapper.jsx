import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//childs
import { Sunrise } from './6.1-Sunrise';
import { FeelsLike } from "./6.2-FeelsLike";


//styles


export const SunriseWrapper = () => {

    
    

   

     
    return (
       <div>
            <Sunrise></Sunrise>
            
            <FeelsLike></FeelsLike>
       </div>
    );  

    



}
import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';

//child
import { UvIndex } from './5.1-UvIndex';
import { Visibility } from "./5.2-Visibility";


//styles


export const UvIndexWrapper = () => {

    
    

   

     
    return (
       <div>
            <UvIndex></UvIndex>

            <Visibility></Visibility>
       </div>
    );  

    



}
import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//styles
import '../../Sass/Components/WrappersComponents/5.1-UvIndex.scss';

export const CardPrediction = ( { children } ) => {


     
    return (
        <div > 

            { children } 

        </div>
    );  

    



}
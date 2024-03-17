import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//styles
import '../../Sass/Components/WrappersComponents/WindStatus.scss';

export const WindStatus = ( { speedWint, currentDate } ) => {

     
    return (
       <div className="windStatusWrapper" > 

            <h1>wind satus </h1>

            <p> { speedWint } </p>

            <p> { currentDate } </p>


       </div>
    );  

    



}
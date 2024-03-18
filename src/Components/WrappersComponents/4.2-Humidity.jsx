import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//styles
import '../../Sass/Components/WrappersComponents/4.2-Humidity.scss'

export const Humidity = ( { humidity } ) => {


     
    return (
       <div className="humidityWrapper" >

            {/* <h1> Humidity </h1> */}
            <p> { humidity } </p>
           
       </div>
    );  

    



}
import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';

//childs
import { WindStatus } from './4.1-WindStatus';
import { Humidity  } from './4.2-Humidity';

//styles
import '../../Sass/Components/WrappersComponents/4.0-WindStatusWrapper.scss';

export const WindStatusWrapper = () => {


    const  { weatherInformation, currentDate, windStatusgift, windgift } = useContext( Contex );

    const { humi, speedWint } = weatherInformation;

           
    return (  
       <div className="windStatusContainer"> 

            
            <WindStatus speedWint = { speedWint } currentDate = { currentDate } windImage = { windgift } ></WindStatus>

            <Humidity humidity = { humi }  ></Humidity>

       </div>
    );  

    



}
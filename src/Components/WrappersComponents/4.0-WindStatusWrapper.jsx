import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';

//childs
import { WindStatus } from './4.1-WindStatus';
import { Humidity  } from './4.2-Humidity';

//styles
import '../../Sass/Components/WrappersComponents/4.0-WindStatusWrapper.scss';

export const WindStatusWrapper = () => {


    const  { weatherInformation, currentDate, windStatusgift } = useContext( Contex );
    console.log( weatherInformation );

    const { humi, speedWint } = weatherInformation;

    console.log( speedWint  )
           
    return ( 
       <div className="windStatusContainer"> 

            
            <WindStatus speedWint = { speedWint } currentDate = { currentDate } windImage = { windStatusgift } ></WindStatus>

            <Humidity humidity = { humi }  ></Humidity>

       </div>
    );  

    



}
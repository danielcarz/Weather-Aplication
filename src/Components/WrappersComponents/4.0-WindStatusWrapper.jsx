import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';

//childs
import { WindStatus } from './4.1-WindStatus';
import { Humidity  } from './4.2-Humidity';

//styles
import '../../Sass/Components/WrappersComponents/WindStatusWrapper.scss';

export const WindStatusWrapper = () => {


    const  { weatherInformation, currentDate } = useContext( Contex );
    console.log( weatherInformation );

    const { humi, speedWint } = weatherInformation;

    console.log( speedWint  )
           
    return (
       <div className="windStatusHumidity">

            
            <WindStatus speedWint = { speedWint } currentDate = { currentDate } ></WindStatus>

            <Humidity humidity = { humi }  ></Humidity>

       </div>
    );  

    



}
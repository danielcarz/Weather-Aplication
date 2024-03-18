import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//styles
import '../../Sass/Components/WrappersComponents/4.1-WindStatus.scss';

export const WindStatus = ( { speedWint, currentDate,  windImage } ) => {

     
    return (
       <div className="windStatusWrapper" > 

             <h1 className="windTittle" > Wind Status </h1> 

            <figure className="gifWrapper" >
             
               <img src={ windImage } alt="windIcon" />

            </figure> 

            <div className="windAndTime" >
                <p> wind value </p>
                <p> time now </p>
            </div>

       </div>
    );  

    



}
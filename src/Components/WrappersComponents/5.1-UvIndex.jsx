import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//styles
import '../../Sass/Components/WrappersComponents/5.1-UvIndex.scss';

export const UvIndex = () => {

    
    

   

     
    return (
        <div className="windStatusWrapper" > 

            <h1 className="windTittle" > Wind Status </h1> 

            <figure className="gifWrapper" >
                
                {/* <img src={ windImage } alt="windIcon" /> */}

            </figure> 

            <div className="windAndTime" >

                {/* <p> { speedWint } Km/h </p>

                <p> { currentDate } </p> */}
            </div>

        </div>
    );  

    



}
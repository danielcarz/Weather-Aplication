import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//styles
import '../../Sass/Components/WrappersComponents/5.1-UvIndex.scss';

export const Sunrise = ( { sunsetImage, sealevel, population, Atmosphericpressure } ) => {

      
    return (
        <div className="windStatusWrapper" > 

            <h1 className="windTittle" > Sunrise  </h1> 

            <figure className="gifWrapper" > 
                
                 <img src={ sunsetImage } alt="windIcon" /> 

            </figure>  

            <div className="windAndTime" > 

             

                <p> Sea level: { sealevel }  </p>
                <p> Populati{ population } </p>
                <p> { Atmosphericpressure } </p>
            </div>
 
        </div>
    );  

    



}
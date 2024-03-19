import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//styles
import '../../Sass/Components/WrappersComponents/6.1-sunrise.scss';

export const Sunrise = ( { sunsetImage, sealevel, population, Atmosphericpressure } ) => {

      
    return (
        <div className="sunriseWrapper" > 

            <h1 className="sunriseTittle" > Sunrise  </h1> 

            <figure className="gifWrapper" > 
                
                 <img src={ sunsetImage } alt="windIcon" /> 

            </figure>  

            <div className="sunriseDescriptions" > 

                <p>  <b> Sea level:  </b> { sealevel } mb </p>
                
                <p> <b> Population: </b> { population } </p>

                <p> 
                    <b> pressure atmospheric:  </b> 
                    { Atmosphericpressure } mb 
                </p>

            </div>
 
        </div>
    );  

    



}
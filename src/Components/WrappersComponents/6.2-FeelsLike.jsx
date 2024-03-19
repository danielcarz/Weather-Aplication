import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//styles
import '../../Sass/Components/WrappersComponents/4.2-Humidity.scss'

export const FeelsLike = ( { feelsLike, celciusIcon } ) => {

   
     
    return ( 
       <div className="humidityWrapper" > 

             <h1 className="humidity" >  <b> Feels like  </b> </h1>

            <div className="humidityAndDewPoint">

               <figure className="feelsLikeWrapper">

                  <img  src = { celciusIcon } alt="feelLikeIcon" />  

                  <p className="feelslike" > { feelsLike }  </p> 

               </figure>


               <p className="dewPoint" > humidity is making it feel ...</p>
            
            
            </div> 

            
           
       </div>
    );  

    



}
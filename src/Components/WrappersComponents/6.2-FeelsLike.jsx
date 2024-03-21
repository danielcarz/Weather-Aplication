import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//styles
import '../../Sass/Components/WrappersComponents/6.2-FeelsLike.scss';
 
export const FeelsLike = ( { feelsLike, celciusIcon } ) => {

   
      
    return ( 
       <div className="feelsLikeWrapper" >  

             <h1 className="feelLikeTittle" >  <b> Feels like  </b> </h1>

            <div className="feelsLikeAndHumidity">

               <figure className="feelsLikeWrapperImage">

                  <img  src = { celciusIcon } alt="feelLikeIcon" />  

                  <p className="feelslike" >  <b>  { feelsLike }  </b> </p>  

               </figure>


              {/*  <p className="dewPoint" > humidity is making it feel ...</p> */}
            
            
            </div> 
       
           
       </div>
    );  

    



}
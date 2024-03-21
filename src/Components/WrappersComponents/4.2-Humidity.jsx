import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';


//styles
import '../../Sass/Components/WrappersComponents/4.2-Humidity.scss'

export const Humidity = ( { humidity } ) => {


     
    return (
       <div className="humidityWrapper" >

             <h1 className="humidity" >  <b> Humidity  </b> </h1>

            <div className="humidityAndDewPoint">

                <p className="" > { humidity } % </p>

              {/*   <p className="dewPoint" > The dew point is ... right now </p> */}
            
            
        </div> 

            
           
       </div>
    );  

    



}
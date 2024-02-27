import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';

//styles
import '../../Sass/Components/WrappersComponents/CurrentWeather.scss';

export const CurrentWeather = () => {

    //contex
    const { weatherArrayInfo, GetCelcius } = useContext( Contex );

    console.log('weatherArray is', GetCelcius)
     
   return ( 
        <section className="currentWeatherWrapper">
 
          {/*   <figure className="currentWeatherImage"> 
                <img alt="image_weather_state"></img> 
            </figure> */}

            <section className="currentWeatherInfo">

                <h3 className="weatherCondition" > { weatherArrayInfo.weatherCondition} </h3>
               
                <h3 className="temperature"> { GetCelcius }º C  </h3>
               
            </section>

            <section className="currentWeatherfeatures">
                <div className="pop">
                    <h5>Pop{  weatherArrayInfo.pop } % </h5>
                </div> 

                <div className="wind">
                    <h5>viento {weatherArrayInfo.speedWint}</h5>
                </div>
            </section>
        
        </section>
); 

    



};
import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';

//styles
import '../../Sass/Components/WrappersComponents/CurrentWeather.scss';

export const CurrentWeather = () => {

    //contex
    const { weatherArrayInfo } = useContext( Contex );

    console.log('weatherArray is', weatherArrayInfo)
     
   return ( 
        <section className="currentWeatherWrapper">
 
            <figure className="currentWeatherImage"> 
                <img alt="image_weather_state"></img>
            </figure>

            <section className="currentWeatherInfo">
                <h3>Weather state info</h3>
                <h3> { weatherArrayInfo.temperature } </h3>
            </section>

            <section className="currentWeatherfeatures">
                <div>
                    <h5>visibilidad</h5>
                </div>

                <div>
                    <h5>viento</h5>
                </div>
            </section>
        
        </section>
); 

    



};
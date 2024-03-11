import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';

//styles
import '../../Sass/Components/WrappersComponents/CurrentWeather.scss';



export const CurrentWeather = () => { 

    //contex
    const { weatherInformation, GetCelcius, imageStateWeather, currentDate } = useContext( Contex );
      

   return ( 
        <section className="currentWeatherWrapper"> 

            <div className="currentWeatherDateInfo">
 
                <h6>  <b> { currentDate } </b>  </h6> 

                <h2 className="currentWeatherTitle"> { weatherInformation.nameCity } </h2>

            
            </div>
 
            <figure className="currentWeatherImage">  

                { 
                    
                    imageStateWeather && <img src={  imageStateWeather  } alt="image status weather" ></img>
                    
                } 

            </figure> 


            <section className="currentWeatherInfo">

                <h3 className="weatherCondition" > { weatherInformation.weatherDescription } </h3>
               
                <h3 className="temperature"> { GetCelcius }º C  </h3>
               
            </section>


            <section className="currentWeatherfeatures">

                <div className="pop">

                    <h5>Pop: {  weatherInformation.pop } % </h5>

                </div> 


                <div className="wind">

                    <h5>viento: {weatherInformation.speedWint}</h5>

                </div>

            </section>
        
        </section>
); 

    



};
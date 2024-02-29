import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';

//styles
import '../../Sass/Components/WrappersComponents/CurrentWeather.scss';



export const CurrentWeather = () => {

    //contex
    const { weatherArrayInfo, GetCelcius, useGetWeatherImage, imageWeather } = useContext( Contex );

    console.log('iamge weather', weatherArrayInfo)
     
 

   return ( 
        <section className="currentWeatherWrapper">
 
            <figure className="currentWeatherImage">  

                { 
                    
                    imageWeather && <img src={  imageWeather  } alt="image status weather" ></img>
                    
                } 

            </figure> 


            <section className="currentWeatherInfo">

                <h3 className="weatherCondition" > { weatherArrayInfo.weatherDescription } </h3>
               
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
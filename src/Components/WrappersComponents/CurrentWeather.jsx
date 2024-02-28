import React, { useState, useEffect, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';

//styles
import '../../Sass/Components/WrappersComponents/CurrentWeather.scss';

//images 
import sun from '../../Assets/sun.png';
import brokenClouds from '../../Assets/dark-cloud.png';
import cloudy from '../../Assets/cloudy.png';
import thunderstorm  from '../../Assets/stormy.png';

export const CurrentWeather = () => {

    //contex
    const { weatherArrayInfo, GetCelcius } = useContext( Contex );

    //console.log('weatherArray is', weatherArrayInfo)

    let imageWeather;

    if( weatherArrayInfo.weatherCondition  === 'Rain'){
        imageWeather = thunderstorm;
        
        //console.log( 'light rain' )
   
        
    }else if ( weatherArrayInfo.weatherCondition  === 'broken clouds' ){
        imageWeather = brokenClouds;

    }else if ( weatherArrayInfo.weatherCondition  === 'overcast clouds' ){
        imageWeather = cloudy;
    }
     
 
   return ( 
        <section className="currentWeatherWrapper">
 
            <figure className="currentWeatherImage">  
                { 
                    
                    imageWeather && <img src={ imageWeather  } alt="image status weather" ></img>
                    
                }
            </figure> 

            <section className="currentWeatherInfo">

                <h3 className="weatherCondition" > { weatherArrayInfo.weatherCondition } </h3>
               
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
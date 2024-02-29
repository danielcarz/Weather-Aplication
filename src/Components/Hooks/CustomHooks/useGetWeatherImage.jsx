import React from 'react';

//images
import sun from '../../../Assets/sun.png';

import clouds from '../../../Assets/clouds.png';
import cloudyWithSun from '../../../Assets/cloudyWithSun.png';
import fewCloudy from '../../../Assets/fewCloudy.png';
import brokenClouds from '../../../Assets/dark-cloud.png';


import lightRain from '../../../Assets/lightRain.png';
import drizzle from '../../../Assets/drizzle.png';
import moderateRain from '../../../Assets/moderateRain.png';
import thunderstorm  from '../../../Assets/stormy.png';

import snow from '../../../Assets/snow.png';

    //styles

    export const useGetWeatherImage =  ( weatherCondition, weatherDescription ) => {
 
        let imageWeather;


        if( weatherCondition  === 'Rain'){

            if ( weatherDescription === 'light rain' ) {

                imageWeather = lightRain;

            } else if (  weatherDescription === 'moderate rain' ){

                imageWeather = moderateRain;
                 
            } else if (  weatherDescription === 'heavy intensity rain' ){

                imageWeather = thunderstorm;
                
            } else if (  weatherDescription === 'heavy intensity rain' ){

                imageWeather = thunderstorm;
                
            }
            
        
        } else if ( weatherCondition === 'Clouds' ){ 

            if( weatherDescription === 'few clouds' ){

                imageWeather = cloudyWithSun;
            } else if ( weatherDescription === 'broken clouds' ){

                imageWeather = brokenClouds;

            }  else if ( weatherDescription === 'overcast clouds' ){

                imageWeather = fewCloudy;

            } else {

                imageWeather = cloudyWithSun;
                console.log( imageWeather )
            }
        } else if (  weatherCondition === 'Thunderstorm'  ){
            imageWeather = thunderstorm;
        } else if ( weatherCondition === 'Drizzle'  ){
            imageWeather = drizzle;
        } else if ( weatherCondition === '	Snow'  ){
            imageWeather = snow;
        }
        
        else {
            // Imagen por defecto si ninguna condición se cumple
            imageWeather = sun;
        }

        return {
            imageWeather
        };
 
        
                 
       
    };

  
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

import uvIndexGif  from '../../../Assets/sun-unscreengif.gif';
import sungift  from '../../../Assets/sunsetgift.gif';
import windgift  from '../../../Assets/windgift.gif';
    //styles

    export const useGetWeatherImage =  ( weatherCondition, weatherDescription ) => {
 
        let imageStateWeather;


        if( weatherCondition  === 'Rain'){

            if ( weatherDescription === 'light rain' ) {

                imageStateWeather = lightRain;

            } else if (  weatherDescription === 'moderate rain' ){

                imageStateWeather = moderateRain;
                 
            } else if (  weatherDescription === 'heavy intensity rain' ){

                imageStateWeather = thunderstorm;
                
            } else if (  weatherDescription === 'heavy intensity rain' ){

                imageStateWeather = thunderstorm;
                
            }
            
        
        } else if ( weatherCondition === 'Clouds' ){ 

            if( weatherDescription === 'few clouds' ){

                imageStateWeather = cloudyWithSun;
            } else if ( weatherDescription === 'broken clouds' ){

                imageStateWeather = brokenClouds;

            }  else if ( weatherDescription === 'overcast clouds' ){

                imageStateWeather = fewCloudy;

            } else {

                imageStateWeather = cloudyWithSun;
                console.log( imageStateWeather )
            }
        } else if (  weatherCondition === 'Thunderstorm'  ){
            imageStateWeather = thunderstorm;
        } else if ( weatherCondition === 'Drizzle'  ){
            imageStateWeather = drizzle;
        } else if ( weatherCondition === '	Snow'  ){
            imageStateWeather = snow;
        }
        
        else {
            // Imagen por defecto si ninguna condición se cumple
            imageStateWeather = sun;
        }

        return {
            imageStateWeather,

            //wind status
            uvIndexGif,
            sungift,
            windgift,

            
        };
 
        
                 
       
    };

  
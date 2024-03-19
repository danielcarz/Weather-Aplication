import React, { useState, useEffect, useContext } from "react";

//context
//import { Contex } from './Hooks/Contex/CreateContext.jsx';

 
//styles


export const useGetDataFromApi = ( pais, dataProvider ) => {

    return dataProvider( pais )
  
            .then( data => { 
 
            console.log( 'dataaaaa', data )
  
//CURRENT DATES

                const [ { cod, city, list } ] = [ data ];
                                 
                const { id, name, population } = city; 
                
                const [ { main, wind, dt_txt, rain, weather, pop, visibility } ] = list ;
                
                const { speed } = wind; 
                
                const { temp, humidity, grnd_level, pressure, feels_like, temp_max, temp_min, sea_level } = main;
              

                const { main: weatherMain, description } = weather[0];





//MIDNIGHT DATES
               
                
                const getMidnightDateObject = list.filter( item => item.dt_txt.endsWith('00:00:00') );
                

                const midnightTemperatures = getMidnightDateObject.slice(0, 5).map( date => {

                  const { main } =  date;
                  const { temp } = main;

                  const midnight_ValueMainProperty = date.weather[0].main
                  const midnight_ValueDescriptionProperty = date.weather[0].description
                  
                  
                  return { 
                    
                    midnigh_temp : temp, 
                    midnight_main: midnight_ValueMainProperty,
                    midnight_description: midnight_ValueDescriptionProperty, 
                 
                  }
                  
                } );

                console.log( midnightTemperatures )
                
                

                return   {
                  
                  //CURRENT DATES
                    id: id, 
                    code: cod,

                    
                    date: dt_txt,

                    temperature: temp, 
                    humi: humidity, 
                    speedWint: speed,
                    rain: rain,
                    pop: pop,
                    feels_like,
                    max_temperature: temp_max,
                    min_Temperature: temp_min, 
                    
                    
                    conditionsInfo: weather,
                    weatherCondition: weatherMain, 
                    weatherDescription: description,
                    
                    //INFO COUNTRY
                    nameCity: name,
                    population,
                    
                    Atmosphericpressureatsealevel: grnd_level, 
                    pressure,
                    sea_level,
                    

                    //MIDNIGHT DATES
                    
                    midnightDates: getMidnightDateObject,
                    midnightTemperatures: midnightTemperatures


                }   ; 
                

            })

            .catch((error) => {
                // Promise rejected, handle the error
                console.error('Error fetching weather data:', error);
              });
  

}; 
import React, { useState, useEffect, useContext } from "react";

//context
//import { Contex } from './Hooks/Contex/CreateContext.jsx';

 
//styles


export const useGetDataFromApi = ( pais, dataProvider ) => {

    return dataProvider( pais )
 
            .then( data => {
 
               
 
                const [ { cod, city, list } ] = [ data ];
                //console.log( 'data', cod ); 


                //extracting weather info
                const { id, name } = city; 

                const [ { main, wind, dt_txt, rain, weather, pop } ] = list ;
                 
                const { speed } = wind;
                                  
                const { temp, humidity } = main;

                const { main: weatherMain, description } = weather[0]; 


                //console.log( 'description', description )
              
   
                return   { 
                  id: id, code: cod,

                    nameCity: name,
                  
                    date: dt_txt,

                    temperature: temp, 

                    humi: humidity, 

                    speedWint: speed,

                    rain: rain,
                    pop: pop,

                    conditionsInfo: weather,
                    weatherCondition: weatherMain,
                    weatherDescription: description 

                }   ;
                

            })
            .catch((error) => {
                // Promise rejected, handle the error
                console.error('Error fetching weather data:', error);
              });
  

}; 
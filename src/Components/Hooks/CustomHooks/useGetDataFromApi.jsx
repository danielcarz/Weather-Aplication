import React, { useState, useEffect, useContext } from "react";

//context
//import { Contex } from './Hooks/Contex/CreateContext.jsx';

 
//styles


export const useGetDataFromApi = ( pais, dataProvider ) => {

    return dataProvider( pais )
 
            .then( data => {
 
               
 
                const [ { cod, city, list } ] = [ data ];
                
                
                //extracting weather info
                const { id, name } = city; 
                
                const [ { main, wind, dt_txt, rain, weather, pop } ] = list ;
                //console.log( 'list', list );
                
                //extract midnight object
                const getMidnightDateObject = list.filter( item => item.dt_txt.endsWith('00:00:00') );
                
                const { speed } = wind;
                
                const { temp, humidity } = main;

                const { main: weatherMain, description } = weather[0];

                
                


                
              
   
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
                    weatherDescription: description,
                    
                    midnightDate: getMidnightDateObject

                }   ; 
                

            })
            .catch((error) => {
                // Promise rejected, handle the error
                console.error('Error fetching weather data:', error);
              });
  

}; 
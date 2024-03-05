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
                
                //extract midnight object
                const getMidnightDateObject = list.filter( item => item.dt_txt.endsWith('00:00:00') );
                //console.log( 'getmidnight', getMidnightDateObject )

                const midnightTemperatures = getMidnightDateObject.slice(0, 2).map( date => {
                  const { main } =  date;
                  const { temp } = main;
                  console.log( 'midnigth', temp );

                  return { midnigh_temp : temp }

                } );
                
                
                
                const { speed } = wind;
                
                const { temp, humidity } = main;

                const { main: weatherMain, description } = weather[0];

                
                console.log('midnight', midnightTemperatures)


                
              
   
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
                    
                    midnightDates: getMidnightDateObject,
                    midnightTemperatures: midnightTemperatures


                }   ; 
                

            })
            .catch((error) => {
                // Promise rejected, handle the error
                console.error('Error fetching weather data:', error);
              });
  

}; 
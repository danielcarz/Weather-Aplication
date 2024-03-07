import React, { useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';
//components

//styles
import '../../Sass/Components/WrappersComponents/PredictionWeatherState.scss';

export const PredictionWeatherState = ( { valueDay, valueTemperature, weatherStatus } ) => {

    //contex
    const { weatherArrayInfo, nextDays } = useContext( Contex ); 
    console.log('weather array info', valueTemperature); 

    return (
        <section className="predictionWeatherWrapper">

            <section className="PredictionInfoStateWrapper">

                <div>
                    { valueDay } 
                   
 
                    <p>State weather: { weatherStatus } </p>
                    
                

                </div>

                <figure> 
                    <img alt="weather image"></img>
                </figure>

                <div>
                    { valueTemperature }  
                </div>


            </section>

            
            
        </section>
      );
}
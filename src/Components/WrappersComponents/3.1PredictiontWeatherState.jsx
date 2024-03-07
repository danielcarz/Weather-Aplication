import React, { useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';
//components

//styles
import '../../Sass/Components/WrappersComponents/PredictionWeatherState.scss';

export const PredictionWeatherState = ( { valueDay, valueTemperature } ) => {

    //contex
    const { weatherArrayInfo, nextDays } = useContext( Contex ); 
    console.log('weather array info', valueTemperature); 

    return (
        <section className="predictionWeatherWrapper">

            <section className="PredictionInfoStateWrapper">

                <div>
                    { valueDay } 
                   
 
                    <p>State weather</p>
                    
                

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
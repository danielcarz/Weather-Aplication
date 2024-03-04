import React, { useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';
//components

//styles
import '../../Sass/Components/WrappersComponents/PredictionWeatherState.scss';

export const PredictionWeatherState = ( { valueDay } ) => {

    //contex
    const { weatherArrayInfo, nextDays } = useContext( Contex ); 
    //console.log('weather array info', nextDays); 

    return (
        <section className="predictionWeatherContainer">

            <section className="PredictionInfoStateWrapper">

                <div>
                    { valueDay } 

                    <p>State weather</p>
                    
                

                </div>

                <figure>
                    <img alt="weather image"></img>
                </figure>

                <div>
                    <p>00 º celcius </p>
                </div>


            </section>

            
            
        </section>
      );
}
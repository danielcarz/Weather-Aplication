import React, { useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';
//components

//styles
import '../../Sass/Components/WrappersComponents/PredictionWeatherState.scss';

export const PredictionWeatherState = () => {

    //contex
    const { weatherArrayInfo } = useContext( Contex );
    console.log('weather array info', weatherArrayInfo); 

    return (
        <section className="predictionWeatherContainer">

            <div className="predictionTittleWrapper">

                <p>predictions for next week</p>
 
            </div>


            <section className="PredictionInfoStateWrapper">

                <div>
                    <p> { weatherArrayInfo.date } </p>

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
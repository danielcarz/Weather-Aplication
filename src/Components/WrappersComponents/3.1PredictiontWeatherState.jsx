import React, { useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';
//components

//styles
import '../../Sass/Components/WrappersComponents/PredictionWeatherState.scss';

export const PredictionWeatherState = ( { valueDay, valueTemperature, weatherStatus, weatherImage } ) => {

   
    console.log('weather array info', weatherImage); 

    return (
        <section className="predictionWeatherWrapper">

            <section className="PredictionInfoStateWrapper">

                <div >
                    { valueDay } 
                    
 
                    <p>State weather: { weatherStatus } </p>
                    
                

                </div>

                <figure> 
                    {  weatherImage &&  <img src={ weatherImage } alt="weather image"></img> }
                </figure>

                <div>
                   temperatura: { valueTemperature }  º C
                </div>


            </section>

            
            
        </section>
      );
}
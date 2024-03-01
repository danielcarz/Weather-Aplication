import React from "react";

//components


//styles
import '../../Sass/Components/WrappersComponents/PredictionWeatherState.scss';

export const PredictionWeatherState = () => {

    return (
       <section className="predictionWeatherContainer">

            <div className="predictionTittleWrapper">

                <p>predictions for next week</p>
 
            </div>


            <section className="PredictionInfoStateWrapper">

                <div>
                    <p>date</p>

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
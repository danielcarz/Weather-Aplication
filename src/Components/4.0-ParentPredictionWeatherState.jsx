import React, { Children, useContext } from "react";

//context
import { Contex } from './Hooks/Contex/CreateContext';

//childs
import { CardPrediction } from './WrappersComponents/index';

//styles
import '../Sass/Components/WrappersComponents/ParentPredictionWeatherState.scss';

export const ParentPredictionWeatherState = ( ) => {
 
    

    return (
        <section className="ParentpredictionWeatherContainer">  

            <h4 className="predictionTittle">Predictions for next days</h4>  

            <div className="wrapper">

               <CardPrediction></CardPrediction>

            </div>

         
            
        </section>
      );
}
import React, { Children, useContext } from "react";

//context
import { Contex } from '../Hooks/Contex/CreateContext';
//components

//styles
import '../../Sass/Components/WrappersComponents/ParentPredictionWeatherState.scss';

export const ParentPredictionWeatherState = ( { children } ) => {

    

    return (
        <section className="ParentpredictionWeatherContainer">

            <h4>Predictions for next days</h4>

            { children }
         
            
        </section>
      );
}
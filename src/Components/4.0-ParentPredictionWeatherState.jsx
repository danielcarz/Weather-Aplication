import React, { Children, useContext } from "react";

//context
import { Contex } from './Hooks/Contex/CreateContext';

//childs
import { CardPrediction } from './WrappersComponents/index';

//styles
import '../Sass/Components/WrappersComponents/ParentPredictionWeatherState.scss';

export const ParentPredictionWeatherState = ( ) => { 
 
    const { nextDaysArray, maidNightStatus, imageStateWeatherPredictionsArray } = useContext ( Contex );
   console.log( maidNightStatus )
 
    return (
        <section className="ParentpredictionWeatherContainer">  

            <h4 className="predictionTittle">Predictions for next days</h4>  

            <div className="wrapper">
 
               { nextDaysArray.map( ( day, index )  => 
                
                <CardPrediction key={ index }  > 

                     { day } 

                     { maidNightStatus[index] && ( <> Prediction:  {  maidNightStatus[index]  } </> )}

                     { 
                        
                        <figure className="imageStatePredictionWeather" >

                            <img src= { imageStateWeatherPredictionsArray[ index ]  } />

                        </figure>
                     }  

                </CardPrediction> ) }

            </div>

         
            
        </section>
      );
}
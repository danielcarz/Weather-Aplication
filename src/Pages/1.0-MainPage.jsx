import React from "react";

// parents components
import { WeatherCard, TodayHightLight, ParentPredictionWeatherState, /* Testing  */} from "../Components";  

//styles
import '../Sass/App.scss';

export const MainPage = () => {

    return (
        <div className="appContainer">

          <div className="wrapperOne">

            <WeatherCard></WeatherCard> 

            <TodayHightLight></TodayHightLight> 


          </div>

          <ParentPredictionWeatherState></ParentPredictionWeatherState>

         {/*  <Testing></Testing>   */}
          
        
        </div>
      );
}
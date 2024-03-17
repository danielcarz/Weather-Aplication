import React from "react";

//components
import { WeatherCard, TodayHightLight } from "../Components";  

//styles
import '../Sass/App.scss';

export const MainPage = () => {

    return (
        <div className="appContainer">

          <section className="wrapperOne">

            <WeatherCard></WeatherCard>

            <TodayHightLight></TodayHightLight> 

          </section>

         
        
        </div>
      );
}
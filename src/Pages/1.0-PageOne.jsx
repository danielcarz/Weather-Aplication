import React from "react";

//components
import { ComponentOne, WeatherCard} from "../Components";  

//styles
import '../Sass/App.scss';

export const PageOne = () => {

    return (
        <>
         

          <ComponentOne></ComponentOne>

          <WeatherCard></WeatherCard> 

         
           
        </>
      );
}
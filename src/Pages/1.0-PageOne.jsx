import React from "react";

//components
import { NavbarComponent, ComponentOne, WeatherCard} from "../Components";  

//styles
import '../Sass/App.scss';

export const PageOne = () => {

    return (
        <>
          <NavbarComponent></NavbarComponent>

          <ComponentOne></ComponentOne>

          <WeatherCard></WeatherCard>

         
           
        </>
      );
}
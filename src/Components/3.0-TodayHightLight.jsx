import React from "react";

//Wrappers components
import { FormCountry } from './WrappersComponents/4.0-WindStatusWrapper';


//styles
import '../Sass/Components/WrappersComponents/TodayHightLight.scss'

export const TodayHightLight = () => {

    return (
        <div className="todayHighLightContainer">

                <section className="windStatusWrapper" > <FormCountry></FormCountry> </section>

                <section className="uvIndexWrapper"></section>

                <section className="sunRiseWrapper"></section>
        </div>
      );
}
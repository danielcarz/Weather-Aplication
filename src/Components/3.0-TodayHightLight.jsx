import React from "react";

//Wrappers components
import { FormCountry as WindStatusWrapper, UvIndexWrapper } from './WrappersComponents/index.js';

  
//styles
import '../Sass/Components/WrappersComponents/TodayHightLight.scss'

export const TodayHightLight = () => {

    return (
        <div className="todayHighLightContainer">

                <section className="windStatusWrapper" > <WindStatusWrapper></WindStatusWrapper> </section>

                <section className="uvIndexWrapper"> <UvIndexWrapper></UvIndexWrapper> </section>
 
                <section className="sunRiseWrapper"></section>
        </div>
      );
}
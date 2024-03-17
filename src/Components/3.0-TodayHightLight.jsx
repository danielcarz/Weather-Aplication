import React from "react";

//Wrappers components
import { WindStatusWrapper, UvIndexWrapper, SunriseWrapper } from './WrappersComponents/index.js';

  
//styles
import '../Sass/Components/WrappersComponents/TodayHightLight.scss'

export const TodayHightLight = () => {

    return (

        <div className="todayHighLightContainer">

                <section className="todayHighLight windStatusWrapper" > <WindStatusWrapper></WindStatusWrapper> </section>

                <section className="todayHighLight uvIndexWrapper"> <UvIndexWrapper></UvIndexWrapper> </section>
 
                <section className="todayHighLight sunRiseWrapper"> <SunriseWrapper></SunriseWrapper> </section>
        </div>
      );
}
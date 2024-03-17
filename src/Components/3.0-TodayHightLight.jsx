import React from "react";

//Wrappers components
import { WindStatusWrapper, UvIndexWrapper, SunriseWrapper, UvIndex } from './WrappersComponents/index.js';

  
//styles
import '../Sass/Components/WrappersComponents/TodayHightLight.scss'

export const TodayHightLight = () => {

    return (

        <div className="todayHighLightContainer" > 
            
            <h3> Today's HighLight </h3>

            <section className="todayHighLightWrapper">

                <section className="todayHighLight windStatusWrapper" > <WindStatusWrapper></WindStatusWrapper> </section>

                <section className="todayHighLight uvIndexWrapper"> <UvIndexWrapper></UvIndexWrapper> </section>

                <section className="todayHighLight sunRiseWrapper"> <SunriseWrapper></SunriseWrapper> </section>
            </section>

        </div>

       
      );
}
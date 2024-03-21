import React from "react";

//Wrappers components
import { WindStatusWrapper, UvIndexWrapper, SunriseWrapper } from './WrappersComponents/index.js';

   
//styles
import '../Sass/Components/WrappersComponents/3.0-TodayHightLight.scss'

export const TodayHightLight = () => {

    return (

        <div className="todayHighLightContainer" > 
            
            <h3 className="TodayHighTittle" > Today's HighLight </h3>

            <section className="todayHighLightWrapper">

                <section className="todayHighLight windStatusWrapper" > <WindStatusWrapper></WindStatusWrapper> </section>

                <section className="todayHighLight uvIndexWrapper"> <UvIndexWrapper></UvIndexWrapper>  </section>

                 <section className="todayHighLight uvIndexWrapper"> <SunriseWrapper></SunriseWrapper> </section>   

                 
             
            </section>
 
        </div>

       
      );
}
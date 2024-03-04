import React from "react";
    //styles

    export const useGetCurrentDate =  (  ) => {

        const fecha = new Date();
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        const currentDate =  fecha.toLocaleDateString('es-ES', opciones);

        const nextDateOne = new Date ( fecha )
        nextDateOne.setDate( fecha.getDate() + 1 );

        const nextDateTwo = new Date( fecha )
        nextDateTwo.setDate( fecha.getDate() + 2 );

        const nextDaysArray = [
             
            nextDateOne.toLocaleDateString( 'es-ES', opciones),
            nextDateTwo.toLocaleDateString( 'es-ES', opciones),

        ];

        const nextDays = nextDaysArray.map( date => {

            const day  =  date.split( ',' )[0].trim();
            return {  valueDay : day };
            
        } );
        
        


        return {
            //current date
            currentDate,

            //next days Array
            nextDaysArray,
            nextDays

        }
       
    };

  
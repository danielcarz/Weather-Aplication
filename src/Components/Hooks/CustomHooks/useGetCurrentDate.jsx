import React from "react";
    //styles

    export const useGetCurrentDate =  (  ) => {

        const fecha = new Date();
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        const currentDate =  fecha.toLocaleDateString( 'en-US', opciones );

        const nextDateOne = new Date ( fecha )
        nextDateOne.setDate( fecha.getDate() + 1 );

        const nextDateTwo = new Date( fecha )
        nextDateTwo.setDate( fecha.getDate() + 2 );

        const nextDateThree = new Date( fecha )
        nextDateThree.setDate( fecha.getDate() + 3 );

        const nextDateFour = new Date( fecha )
        nextDateFour.setDate( fecha.getDate() + 4 );
        

        const nextDateFive = new Date( fecha )
        nextDateFive.setDate( fecha.getDate() + 5 );
  
        const nextDaysArray = [
             
        
            nextDateOne.toLocaleDateString('en-US', opciones),
            nextDateTwo.toLocaleDateString('en-US', opciones),
            nextDateThree.toLocaleDateString('en-US', opciones),
            nextDateFour.toLocaleDateString('en-US', opciones),
            nextDateFive.toLocaleDateString('en-US', opciones)

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

  
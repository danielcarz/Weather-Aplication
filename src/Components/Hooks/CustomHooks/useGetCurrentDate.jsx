import React from "react";
    //styles

    export const useGetCurrentDate =  (  ) => {
        const fecha = new Date();
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        const currentDate =  fecha.toLocaleDateString('es-ES', opciones);

        return currentDate;
       
    };

  
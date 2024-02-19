import React, { useState, useEffect } from "react";





//styles


export const ComponentOne = () => {

    const [ data, setData ] = useState( [ ] ); 

    useEffect( () => {
    
        const fetchData = async () => {
            try {
                const response =  await fetch ('https://api.openweathermap.org/data/2.5/forecast?q=bogota,co&appid=389f893e1c972644360ed8df4b834963');
    
                const jsonData =  await response.json();
                
                setData( jsonData.city )
    
                
            } catch (error) {
                console.error('something what happend !', error);
            }
        };

        fetchData();

    }, [ ] );

    console.log( data );

    

    return (
        <h1> Component one </h1>
      );
}
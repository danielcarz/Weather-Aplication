
    //styles

    export const useFetchApi = async ( cityName ) => {
       console.log('api is', import.meta.env.REACT_APP_WEATHER_URL)
        
        const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_URL; 
        
        
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
        
        const response = await fetch( url );
        const data = await response.json();
        
        console.log( 'fetchapi', data );
        
        return data; 
    };
 

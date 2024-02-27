
    //styles

    export const fetchApi = async ( cityName ) => {

        
        const apiKey = process.env.WEATHER_URL; // Coloca tu API key aquí
        
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
        
        const response = await fetch( url );
        const data = await response.json();
        
        console.log( 'fetchapi', data );
        
        return data;
    };


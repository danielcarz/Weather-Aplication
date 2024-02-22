
    //styles

    export const fetchApi = async ( cityName ) => {

        console.log( 'executed!' )

        const apiKey = '389f893e1c972644360ed8df4b834963'; // Coloca tu API key aquí

        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

        const response = await fetch( url );
        const data = await response.json();

        return data;
    };


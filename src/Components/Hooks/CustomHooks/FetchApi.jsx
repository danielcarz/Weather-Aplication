
    //styles

    export const fetchApi = async () => {

        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=bogota,co&appid=389f893e1c972644360ed8df4b834963');
        const data = await response.json();

        return data;
    };


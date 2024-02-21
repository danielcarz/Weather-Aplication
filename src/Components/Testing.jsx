import React, { useState } from 'react';

export const Testing = () => {

    const [inputValue, setInputValue] = useState('');

    const [pais, setPais] = useState('');

    const apiKey = '389f893e1c972644360ed8df4b834963'; // Coloca tu API key aquí


    const handleInputChange = (event) => {

        const value = event.target.value;

        setInputValue(value);
    };
    

    const handleSubmit = () => {

        setPais(inputValue);

        console.log(`https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${apiKey}`);
    };

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${pais}&appid=${apiKey}`;

    return (
        <div>
            <h1>Buscador de países</h1>
            <input
                type="text"
                placeholder=" Clima en tu ciudad o pais "
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Obtener clima</button>
            
        </div>
    );
};

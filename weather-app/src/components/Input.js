import React, { useState } from 'react';
import { getWeatherByCity } from '../services/WeatherService';
import { WeatherImage } from '../services/WeatherImage';

function Input({ onWeatherDataChange }) {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleClick = () => {
        if (name.trim() === "") {
            setError('City/Country Name cannot be empty')
            setName('');
        } else {
            getWeatherByCity(name)
                .then(res => {
                    if (res.cod === 200) {
                        const celsiusTemp = res.main.temp - 273.15;
                        const weatherCondition = res.weather[0].main;

                        const imagePath = WeatherImage(weatherCondition);

                        const weatherData = {
                            celcius: celsiusTemp,
                            name: res.name,
                            humidity: res.main.humidity,
                            speed: res.wind.speed,
                            image: imagePath,
                            weather: weatherCondition
                        };

                        onWeatherDataChange(weatherData);
                        setError('');
                    } else {
                        setError('Error fetching weather data');
                    }
                })
                .catch(err => {
                    if (err.response && err.response.status === 404) {
                        setError('Invalid City/Country Name')
                        setName('');
                    }
                    console.log(err);
                });
        }
    };

    return (
        <div className='mt-10 w-72 ml-5 relative'>
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <input
                    onChange={e => setName(e.target.value)}
                    type="search"
                    id="search"
                    className="block w-full p-4 pl-4 text-sm text-gray-900 border border-gray-300 rounded-l-lg rounded-r-lg bg-gray-50
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    value={name}
                    required
                />
                <button onClick={handleClick}
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600
             dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                    <svg className="w-4 h-4 text-white-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </div>
            {error && (
                <div className='text-red-600 p-0 rounded-md mt-1 absolute top-full left-0'>
                    <p>{error}</p>
                </div>
            )}
        </div>

    );
}

export default Input;

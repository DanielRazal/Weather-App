import React from 'react';
import Humidity from "../assets/img/humidity.png";
import Wind from "../assets/img/wind.svg";

function Weather({ data }) {

    return (
        <div className='flex flex-col items-center mt-8'>
            <div className='weather-imgs'>
                <img src={data.image} alt='Weather' className='w-28 h-28 mx-auto' />
                <div className='text-3xl text-center mx-auto'>
                    <h1>{data.weather} - {Math.round(data.celcius)}°C</h1>
                </div>
                <h2 className='text-center mx-auto text-2xl'>{data.name}</h2>
            </div>
            <div className='mt-auto humidity-wind'>
                <div className='col'>
                    <img src={Humidity} alt='humidity' className='w-16 h-16 ml-5' />
                    <div>
                        <p className='text-sm ml-2 mb-5'>{Math.round(data.humidity)}%</p>
                        <p className='text-sm ml-2 mb-0'>Humidity</p>
                    </div>
                </div>
                <div className='col'>
                    <img src={Wind} alt='wind' className='w-16 h-16 mt-16 mr-4' />
                    <div>
                        <p className='text-sm mb-5 mr-2'>{Math.round(data.speed)} km/h</p>
                        <p className='text-sm mb-0 mr-2'>Wind</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;

import React, { useEffect, useState } from 'react'
import { BsBatteryHalf } from 'react-icons/bs';
import { AiOutlineWifi } from 'react-icons/ai';
import { GiNetworkBars } from "react-icons/gi";
import Clock from './Clock';
import Input from './Input';
import Weather from './Weather';
import { getWeatherByCity } from '../services/WeatherService';
import { WeatherImage } from '../services/WeatherImage';
import { BallTriangleLoader } from '../services/SpinnerService';

function Iphone() {

    const [data, setData] = useState({
        celcius: 0,
        name: 'Tel Aviv',
        humidity: 0,
        speed: 0,
        image: '',
        weather: ''
    });

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        getWeatherByCity('Tel Aviv')
            .then(res => {
                const celsiusTemp = res.main.temp - 273.15;
                const weatherCondition = res.weather[0].main;
                const imagePath = WeatherImage(weatherCondition);

                const WeatherData = {
                    celcius: celsiusTemp,
                    name: res.name,
                    humidity: res.main.humidity,
                    speed: res.wind.speed,
                    image: imagePath,
                    weather: weatherCondition
                };

                setData(WeatherData);
            })
            .catch(err => console.log(err))
            .finally(() => {
                const loadingTimer = setTimeout(() => {
                    setLoading(false);
                }, 1500);
                return () => clearTimeout(loadingTimer);
            });
    }, []);



    const handleWeatherDataChange = (weatherData) => {
        setData(weatherData);
    };

    return (
        <div>
            {loading ? (
                <BallTriangleLoader />
            ) : (
                <>
                    <div className="iphone">
                        <div className="side">
                            <div className="screen">
                                <div className="icon-container">
                                    <BsBatteryHalf className='battery' size={17} />
                                    <AiOutlineWifi className='wifi' size={15} />
                                    <GiNetworkBars className='network' size={13} />
                                    <Clock />
                                </div>
                                <Input onWeatherDataChange={handleWeatherDataChange} />
                                <Weather data={data} />
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="header">
                            <div className="sensor-1"></div>
                            <div className="sensor-2"></div>
                            <div className="sensor-3"></div>
                        </div>
                        <div className="volume-button"></div>
                        <div className="power-button"></div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Iphone;
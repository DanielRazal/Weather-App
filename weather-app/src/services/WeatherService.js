import axios from 'axios';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;


export const getWeatherByCity = async (name) => {
    try {
        const apiUrl = `${apiBaseUrl}?q=${name}&appid=${apiKey}`;
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
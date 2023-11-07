import Clouds from "../assets/img/clouds.png";
import Clear from "../assets/img/clear.png";
import Rain from "../assets/img/rain.png";
import Drizzle from "../assets/img/drizzle.png";
import Mist from "../assets/img/mist.png";

export const WeatherImage = (weatherCondition) => {
    switch (weatherCondition) {
        case "Clouds":
            return Clouds;
        case "Clear":
            return Clear;
        case "Rain":
            return Rain;
        case "Drizzle":
            return Drizzle;
        case "Mist":
            return Mist;
        default:
            return Clouds;
    }
};
import { createContext, useContext, useState } from "react";
import { getWeatherForCity, getWeatherForCurrentLocation } from "../api";

const weatherContext = createContext(null);

export const useWeather = () => {
    return useContext(weatherContext);
};

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState("");

    const fetchData = async () => {
        const response = await getWeatherForCity(searchCity);
        setData(response);
    };
    const fetchDataForCurrentLocation = ()=> {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const response = await getWeatherForCurrentLocation(latitude, longitude);
            setData(response);
        });
    };

    return (
        <weatherContext.Provider
            value={{
                searchCity,
                setSearchCity,
                data,
                fetchData,
                fetchDataForCurrentLocation
            }}
        >
            {props.children}
        </weatherContext.Provider>
    );
};
const baseURL = 'https://api.weatherapi.com/v1/current.json?key=' + process.env.REACT_APP_WEATHER_API_KEY;

export const getWeatherForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
};
export const getWeatherForCurrentLocation = async (latitude, longitude) => {
    const response = await fetch(`${baseURL}&q=${latitude},${longitude}&aqi=yes`);
    return await response.json();
};
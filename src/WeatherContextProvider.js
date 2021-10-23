import { createContext, useState } from "react";

export const WeatherContext = createContext({
    cities: [],
    addCity: (name, temperature) => {},
});

const WeatherContextProvider = (props) => {
    const [cities, setCities] = useState([]);

    const addCity = (name, temperature) => {
        setCities((prevCities) => [...prevCities, { name, temperature }]);
    };

    return (
        <WeatherContext.Provider
            value={{
                cities,
                addCity,
            }}
        >
            {props.children}
        </WeatherContext.Provider>
    );
};

export default WeatherContextProvider;

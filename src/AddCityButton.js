import React, { useContext, useState } from "react";
import { WeatherContext } from "./WeatherContextProvider";

const AddCityButton = (props) => {
    const context = useContext(WeatherContext);
    const [name, setName] = useState("");
    const submit = () => {
        const unit = "imperial";
        const mode = "json";
        const encodedName = encodeURIComponent(name);
        // https://rapidapi.com/community/api/open-weather-map/
        fetch(
            `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&mode=${mode}&q=${encodedName}`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host":
                        "community-open-weather-map.p.rapidapi.com",
                    "X-RapidAPI-Key": ``,
                },
            }
        )
            .then((res) => {
                if (res.status !== 200) throw new Error();
                return res.json();
            })
            .then((json) => {
                const fToc = ((json.main.temp - 32) / 1.8).toFixed(2);
                context.addCity(name, parseInt(fToc));
                setName("");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="add-city-form">
            <input
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button className="input" onClick={submit}>
                Add
            </button>
        </div>
    );
};

export default AddCityButton;

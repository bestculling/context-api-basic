import { useContext } from "react";
import { WeatherContext } from "./WeatherContextProvider";

const CityList = (props) => {
    const context = useContext(WeatherContext);
    return (
        <div>
            <table className="city-list">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                    </tr>
                </thead>
                <tbody>
                    {context.cities.map((city, i) => (
                        <tr key={city.name}>
                            <td>{city.name}</td>
                            <td>{city.temperature}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CityList;

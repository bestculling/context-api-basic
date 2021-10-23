import "./App.css";
import WeatherContextProvider from "./WeatherContextProvider";
import CityList from "./CityList";
import AddCityButton from "./AddCityButton";
import TemperatureAverage from "./TemperatureAverage";

function App() {
    return (
        <WeatherContextProvider>
            <div className="city-overview">
                <h2>Multi-Weather App</h2>
                <CityList />
                <AddCityButton />
                <TemperatureAverage />
            </div>
        </WeatherContextProvider>
    );
}

export default App;

import { createContext, useState, useContext } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {

    const [select, setSelect] = useState("Istanbul");
    const [weather, setWeather] = useState([]);
    const [today, setToday] = useState(null);


    const values = {
       select,
       setSelect,
       weather,
       setWeather,
       today,
       setToday
    };

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    );

};

export const useWeather = () => useContext(WeatherContext);


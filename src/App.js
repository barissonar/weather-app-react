import Weather from './Components/Weather'
import './App.css';
import { WeatherProvider } from './Context/WeatherContext'; // Contexti component üzerinde kullanabilmek için provideri import ediyoruz.

function App() {
  return (
    <WeatherProvider>  
      <Weather/> 
    </WeatherProvider>
  );
}

export default App;

import { useEffect } from "react";
import { useWeather } from "../Context/WeatherContext";
const api = {                                          // EndPointlerin ve keylerin api objectinde tanımlandığı kısım. 
     geokey: "35eb4471e9f465a1c42dc9b42f9cc931",
     geocodingAPI: "http://api.openweathermap.org/geo/1.0/direct",
     weatherkey: "0bb65938ac5f4fb3893bd54015ad43c8",
     weatherAPI : "https://api.weatherbit.io/v2.0/forecast/daily",
     weatherIcon : "https://cdn.weatherbit.io/static/img/icons"
}
function Weather() {
    const country = "TR";
    const {select,setSelect,weather,setWeather,today,setToday}  = useWeather(); // Context API üzerinden statelerin alındığı kısım.
    
    useEffect(() => {              // Component mount edildiğinde mevcut tarihi state'a gönder.  
      document.title = 'Weather Forecast'
      const today = new Date();
      const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      setToday(formattedDate);
      console.log(formattedDate);
    } , []);

    

    useEffect(() => (geocodingRequest())   // Select state'i her değiştiğinde seçilen şehir için API çağrısı yap.
    ,[select]);


    const geocodingRequest = () => {         // Coğrafi koordinatların alındığı fonksiyon.
      fetch(`${api.geocodingAPI}?q=${select},"",${country}&limit=1&appid=${api.geokey}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        weatherRequest(result);
      })
      .catch(error => {
        console.error('Geocoding request failed:', error);
        // Handle the error as needed
      });
    }
   
    const weatherRequest = (response) => {    // Gelen coğrafi koordinatlara göre hava durumunu getiren fonksiyon.
      fetch(`${api.weatherAPI}?lat=${response[0].lat}&lon=${response[0].lon}&lang=${country}&key=${api.weatherkey}`)
      .then(res => res.json())
      .then(result => {
         console.log(result);
         setWeather(result.data);
      }) 
      .catch(error => {
        console.error('weather request failed:', error);
      });

    }

    
    
    return (   
      <section className="container">
          <h1>Weather Forecast</h1> 
          <select className="select-input" value={select} onChange={(e) => setSelect(e.target.value)}> 
                 <option value="Adana">Adana</option>
                 <option value="Adiyaman">Adıyaman</option>
                 <option value="Afyonkarahisar">Afyonkarahisar</option>
                 <option value="Agri">Ağrı</option>
                 <option value="Amasya">Amasya</option>
                 <option value="Ankara">Ankara</option>
                 <option value="Antalya">Antalya</option>
                 <option value="Artvin">Artvin</option>
                 <option value="Aydin">Aydın</option>
                 <option value="Balikesir">Balıkesir</option>
                 <option value="Bilecik">Bilecik</option>
                 <option value="Bingol">Bingöl</option>
                 <option value="Bitlis">Bitlis</option>
                 <option value="Bolu">Bolu</option>
                 <option value="Burdur">Burdur</option>
                 <option value="Bursa">Bursa</option>
                 <option value="Canakkale">Çanakkale</option>
                 <option value="Cankiri">Çankırı</option>
                 <option value="Corum">Çorum</option>
                 <option value="Denizli">Denizli</option>
                 <option value="Diyarbakir">Diyarbakır</option>
                 <option value="Edirne">Edirne</option>
                 <option value="Elazig">Elazığ</option>
                 <option value="Erzincan">Erzincan</option>
                 <option value="Erzurum">Erzurum</option>
                 <option value="Eskisehir">Eskişehir</option>
                 <option value="Gaziantep">Gaziantep</option>
                 <option value="Giresun">Giresun</option>
                 <option value="Gümüshane">Gümüşhane</option>
                 <option value="Hakkari">Hakkâri</option>
                 <option value="Hatay">Hatay</option>
                 <option value="Isparta">Isparta</option>
                 <option value="Mersin">Mersin</option>
                 <option value="Istanbul">İstanbul</option>
                 <option value="Izmir">İzmir</option>
                 <option value="Kars">Kars</option>
                 <option value="Kastamonu">Kastamonu</option>
                 <option value="Kayseri">Kayseri</option>
                 <option value="Kirklareli">Kırklareli</option>
                 <option value="Kirsehir">Kırşehir</option>
                 <option value="Kocaeli">Kocaeli</option>
                 <option value="Konya">Konya</option>
                 <option value="Kutahya">Kütahya</option>
                 <option value="Malatya">Malatya</option>
                 <option value="Manisa">Manisa</option>
                 <option value="Kahramanmaras">Kahramanmaraş</option>
                 <option value="Mardin">Mardin</option>
                 <option value="Mugla">Muğla</option>
                 <option value="Mus">Muş</option>
                 <option value="Nevsehir">Nevşehir</option>
                 <option value="Nigde">Niğde</option>
                 <option value="Ordu">Ordu</option>
                 <option value="Rize">Rize</option>
                 <option value="Sakarya">Sakarya</option>
                 <option value="Samsun">Samsun</option>
                 <option value="Siirt">Siirt</option>
                 <option value="Sinop">Sinop</option>
                 <option value="Sivas">Sivas</option>
                 <option value="Tekirdag">Tekirdağ</option>
                 <option value="Tokat">Tokat</option>
                 <option value="Trabzon">Trabzon</option>
                 <option value="Tunceli">Tunceli</option>
                 <option value="Sanliurfa">Şanlıurfa</option>
                 <option value="Usak">Uşak</option>
                 <option value="Van">Van</option>
                 <option value="Yozgat">Yozgat</option>
                 <option value="Zongunldak">Zonguldak</option>
                 <option value="Aksaray">Aksaray</option>
                 <option value="Bayburt">Bayburt</option>
                 <option value="Karaman">Karaman</option>
                 <option value="Kirikkale">Kırıkkale</option>
                 <option value="Batman">Batman</option>
                 <option value="Sirnak">Şırnak</option>
                 <option value="Bartin">Bartın</option>
                 <option value="Ardahan">Ardahan</option>
                 <option value="Igdir">Iğdır</option>
                 <option value="Yalova">Yalova</option>
                 <option value="Karabuk">Karabük</option>
                 <option value="Kilis">Kilis</option>
                 <option value="Osmaniye">Osmaniye</option>
                 <option value="Duzce">Düzce</option>
          </select>

          <div className="WeatherContainer"> 

            <ul className="weather-list">
              {
                weather.map((item,index) => (                // API çağrısıyla gelen object verilerinin DOM'a eklenmesi.
                 
                <li key={index} className="weather-item">
                
                 <div className={today === item.valid_date ? "weather-item-select" : ""}> 
                    <h3 className="weather-item-header">{item.datetime}</h3>
                    <img width="75px" height="75px" src={`${api.weatherIcon}/${item.weather.icon}.png`} alt="Resim Yüklenemedi."></img>
                    <div>
                      <span className="weather-item-maxcelsius">
                        {item.max_temp}°
                      </span>
                      <span className="weather-item-mincelsius">
                      {item.min_temp}°
                      </span>
                    </div>
                 </div>        
                    
                </li>
                ))
              }
              
            </ul>

          </div>
      </section>

    );
  }

export default Weather;  
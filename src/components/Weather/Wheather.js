import WeatherByDate from "./WeatherByDate";

function Weather(props) {
  // console.log(props.meteo)
  return (
    <div className="Weather">
    <h2>{props.meteo.title}</h2>
    {props.meteo.consolidated_weather.map((byDate) => <WeatherByDate key={byDate.id} byDate={byDate} />)}
    

    </div>
  
  );
}

export default Weather;
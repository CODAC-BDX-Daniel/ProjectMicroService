import Weather from "./Wheather";

function Weathers() {
    
  const ArrWeathers = JSON.parse(localStorage.getItem("Weathers"));
  console.log(ArrWeathers);
  return (
      <div className="Weathers">

          {ArrWeathers.map((weather) => <Weather key={weather.woeid} meteo={weather} />)}
        


        </div>
  )
      
 
}

export default Weathers;
function WeatherByDate(props) {
  // console.log(props.byDate)
  return (
    <div className="byDate">
    <p><span>Date : </span>{props.byDate.applicable_date}</p>
    <p><span>temp :</span> {props.byDate.the_temp.toFixed()} °C</p>
    <p><span>Prediction :</span> {props.byDate.predictability} %</p>
    </div>
  
   ) ;
}

export default WeatherByDate;
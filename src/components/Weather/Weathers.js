import Weather from "./Wheather";
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import React from "react";
import {useEffect, useState} from "react";



function Weathers() {

    const ArrWeathers = JSON.parse(localStorage.getItem("Weathers"));
    const animatedComponents = makeAnimated();
    const [selectedOption, setSelectedOption] = useState([]);
    const options = [
        { value: ArrWeathers[0], label: 'Weather Bordeaux'},
        { value: ArrWeathers[1], label: 'Weather Marseille'},
        { value: ArrWeathers[2], label: 'Weather Lyon'},
    ];
    // console.log(selectedOption)
    // console.log(ArrWeathers);
    // console.log(ArrWeathers[0])
    return (
        <div className="Weathers">
            <Select closeMenuOnSelect={false} components={animatedComponents} isMulti options={options} onChange={setSelectedOption} />


            {/*{ArrWeathers.map((weather) => <Weather key={weather.woeid} meteo={weather}/>)}*/}
            {selectedOption.map((weather) => <Weather key={weather.value.woeid} meteo={weather.value}/>)}
        </div>
    )


}

export default Weathers;

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setDailyForecast } from "../actions/index"
const DailyWeath = () => {

    const [inpSearch, SetInpSearch] = useState();
    const weathData = useSelector(state => state.daily);
    const dispatch = useDispatch();

    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

    const timeOne = weathData.list[0].dt;
    const dateOne = new Date(timeOne * 1000);
    const weekOne = `${dateOne.getDay()}`;
    const one = `${dateOne.getDate()}-${dateOne.getMonth()}-${dateOne.getFullYear()}`;
    const dayOne = weekDay[weekOne] + " " + one;


    const timeTwo = weathData.list[6].dt;
    const dateTwo = new Date(timeTwo * 1000);
    const weekTwo = `${dateTwo.getDay()}`;
    const two = `${dateTwo.getDate()}-${dateTwo.getMonth()}-${dateTwo.getFullYear()}`;
    const dayTwo = weekDay[weekTwo] + " " + two;


    const timeThree = weathData.list[14].dt;
    const dateThree = new Date(timeThree * 1000);
    const weekThree = `${dateThree.getDay()}`;
    const three = `${dateThree.getDate()}-${dateThree.getMonth()}-${dateThree.getFullYear()}`;
    const dayThree = weekDay[weekThree] + " " + three;


    const timeFour = weathData.list[22].dt;
    const dateFour = new Date(timeFour * 1000);
    const weekFour = `${dateFour.getDay()}`;
    const four = `${dateFour.getDate()}-${dateFour.getMonth()}-${dateFour.getFullYear()}`;
    const dayFour = weekDay[weekFour] + " " + four;


    const timeFive = weathData.list[30].dt;
    const dateFive = new Date(timeFive * 1000);
    const weekFive = `${dateFive.getDay()}`;
    const five = `${dateFive.getDate()}-${dateFive.getMonth()}-${dateFive.getFullYear()}`;
    const dayFive = weekDay[weekFive] + " " + five;
    

    const getData = () => {
        if(!inpSearch){
            alert("Please enter location!");
        }else{
            dispatch(setDailyForecast(inpSearch));
        }
    }
  


    return (
        <>
            <div className="container-lg my-3">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" value={inpSearch} onChange={(e) => SetInpSearch(e.target.value)} placeholder="Search location" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-success" type="button" id="button-addon2" onClick={getData} >Search</button>
                </div>
            </div>
            <div className="container-lg my-5">
                <div className="row mx-1">
                    <div className="MaindailyDiv col shadow">
                        <p className="bg-light p-2 h5 text-center mt-3">{weathData.city.name}, IN 5-Day Forecast</p>
                        <div className="dailyDiv p-4">

                            <div className="divOne border-end">
                                <div className="heading">
                                    <p className="myText bg-info text-white ps-4 pe-4 py-2 h6 text-center">{dayOne}</p>
                                    <img src={`http://openweathermap.org/img/wn/${weathData.list[0].weather[0].icon}.png`} alt="" />
                                </div>
                                <div className="info">
                                    <div className="line">
                                        <small>Temp</small>
                                        <p className="h6">{weathData.list[0].main.temp}&deg;c</p>
                                    </div>
                                    <div className="line">
                                        <small>Pressure</small>
                                        <p className="h6">{weathData.list[0].main.pressure}mb</p>
                                    </div>
                                    <div className="line">
                                        <small>Humidity</small>
                                        <p className="h6">{weathData.list[0].main.humidity}%</p>
                                    </div>
                                    <div className="line">
                                        <small>Wind</small>
                                        <p className="h6">{weathData.list[0].wind.speed}km/h</p>
                                    </div>
                                    <div className="line">
                                        <small>Mood</small>
                                        <p className="h6">{weathData.list[0].weather[0].main}</p>
                                    </div>
                                </div>

                            </div>
                            <div className="divTwo border-end">
                                <div className="heading">
                                    <p className="myText bg-info text-white ps-4 pe-4 py-2 h6 text-center">{dayTwo}</p>
                                    <img src={`http://openweathermap.org/img/wn/${weathData.list[6].weather[0].icon}.png`} alt="" />
                                </div>
                                <div className="info">
                                    <div className="line">
                                        <small>Temp</small>
                                        <p className="h6">{weathData.list[6].main.temp}&deg;c</p>
                                    </div>
                                    <div className="line">
                                        <small>Pressure</small>
                                        <p className="h6">{weathData.list[6].main.pressure}mb</p>
                                    </div>
                                    <div className="line">
                                        <small>Humidity</small>
                                        <p className="h6">{weathData.list[6].main.humidity}%</p>
                                    </div>
                                    <div className="line">
                                        <small>Wind</small>
                                        <p className="h6">{weathData.list[6].wind.speed}km/h</p>
                                    </div>
                                    <div className="line">
                                        <small>Mood</small>
                                        <p className="h6">{weathData.list[6].weather[0].main}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="divThree border-end">
                                <div className="heading">
                                    <p className="myText bg-info text-white ps-4 pe-4 py-2 h6 text-center">{dayThree}</p>
                                    <img src={`http://openweathermap.org/img/wn/${weathData.list[14].weather[0].icon}.png`} alt="" />
                                </div>
                                <div className="info">
                                    <div className="line">
                                        <small>Temp</small>
                                        <p className="h6">{weathData.list[14].main.temp}&deg;c</p>
                                    </div>
                                    <div className="line">
                                        <small>Pressure</small>
                                        <p className="h6">{weathData.list[14].main.pressure}mb</p>
                                    </div>
                                    <div className="line">
                                        <small>Humidity</small>
                                        <p className="h6">{weathData.list[14].main.humidity}%</p>
                                    </div>
                                    <div className="line">
                                        <small>Wind</small>
                                        <p className="h6">{weathData.list[14].wind.speed}km/h</p>
                                    </div>
                                    <div className="line">
                                        <small>Mood</small>
                                        <p className="h6">{weathData.list[14].weather[0].main}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="divFour border-end">
                                <div className="heading">
                                    <p className="myText bg-info text-white ps-4 pe-4 py-2 h6 text-center">{dayFour}</p>
                                    <img src={`http://openweathermap.org/img/wn/${weathData.list[22].weather[0].icon}.png`} alt="" />
                                </div>
                                <div className="info">
                                    <div className="line">
                                        <small>Temp</small>
                                        <p className="h6">{weathData.list[22].main.temp}&deg;c</p>
                                    </div>
                                    <div className="line">
                                        <small>Pressure</small>
                                        <p className="h6">{weathData.list[22].main.pressure}mb</p>
                                    </div>
                                    <div className="line">
                                        <small>Humidity</small>
                                        <p className="h6">{weathData.list[22].main.humidity}%</p>
                                    </div>
                                    <div className="line">
                                        <small>Wind</small>
                                        <p className="h6">{weathData.list[22].wind.speed}km/h</p>
                                    </div>
                                    <div className="line">
                                        <small>Mood</small>
                                        <p className="h6">{weathData.list[22].weather[0].main}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="divFive border-end">
                                <div className="heading">
                                    <p className="myText bg-info text-white ps-4 pe-4 py-2 h6 text-center">{dayFive}</p>
                                    <img src={`http://openweathermap.org/img/wn/${weathData.list[30].weather[0].icon}.png`} alt="" />
                                </div>
                                <div className="info">
                                    <div className="line">
                                        <small>Temp</small>
                                        <p className="h6">{weathData.list[30].main.temp}&deg;c</p>
                                    </div>
                                    <div className="line">
                                        <small>Pressure</small>
                                        <p className="h6">{weathData.list[30].main.pressure}mb</p>
                                    </div>
                                    <div className="line">
                                        <small>Humidity</small>
                                        <p className="h6">{weathData.list[30].main.humidity}%</p>
                                    </div>
                                    <div className="line">
                                        <small>Wind</small>
                                        <p className="h6">{weathData.list[30].wind.speed}km/h</p>
                                    </div>
                                    <div className="line">
                                        <small>Mood</small>
                                        <p className="h6">{weathData.list[30].weather[0].main}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default DailyWeath

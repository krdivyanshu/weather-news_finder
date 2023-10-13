export const setWeatherInfo = (data) => {
    return {
        type : "SET_WEATHER",
        payload : {
            data : data
        }
    }
}
export const setDailyForecast = (searchData) => {
    return async (dispatch) => {
       const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchData ? searchData : "delhi"}&units=metric&appid=58aab3327201016821c56b94f96ac08d`)
       const resData = await res.json();
       dispatch({type : "SET_DAILY" , payload : resData});

    }
}
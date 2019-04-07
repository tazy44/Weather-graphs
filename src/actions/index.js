import {FETCH_WEATHER} from './action-types'
const API_KEY="287678e40c68094db0dd369e0b7483d2";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
    const URL = `${ROOT_URL}&q=${city}`;
    return function(dispatch) {
        return fetch(URL)
        .then(response => response.json())
        .then(json => {
            dispatch({type: FETCH_WEATHER, payload: json});
        })
    }
}
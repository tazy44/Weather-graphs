import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(cityData) {
        let cityName = cityData.city.name
        let temps = cityData.list.map(item => (item.main.temp-273.15));
        let pressure = cityData.list.map(item=> (item.main.pressure));
        let humidity = cityData.list.map(item=> (item.main.humidity));
        return (
            <tr key={cityName}>
                <td>{cityName}</td>
                <td>
                    <Chart data={temps} color="red" unit="C" />
                </td>
                <td>
                    <Chart data={pressure} color="orange" unit="hPa" />
                </td>
                <td>
                    <Chart data={humidity} color="green" unit="%" />
                </td>
            </tr>
        );
    }

    render() {
        if (this.props.weather) {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
        } else {
            return null;
        }
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
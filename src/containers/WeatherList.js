import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
    renderWeather(cityData) {
        let cityName = cityData.city.name
        return (
            <tr key={cityName}>
                <td>{cityName}</td>
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
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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
var React = require('react');

var WeatherMessage = (props) => {
    return (
            <h2>It's {props.searchResult.temp} in {props.searchResult.location}</h2>
        );
}

module.exports = WeatherMessage;
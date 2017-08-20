var React = require('react');

var WeatherMessage = (props) => {
    return (
            <h1 className="text-center">It's {props.searchResult.temp} in {props.searchResult.location}</h1>
        );
}

module.exports = WeatherMessage;
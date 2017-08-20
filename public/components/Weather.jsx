var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherAPI = require('OpenWeatherAPI');
var Weather = React.createClass({
    getInitialState: function() {
        return ({
            isLoading: false
        })   
    },
    handleSearch: function(location) {
        var that = this;
        this.setState({isLoading: true});
        OpenWeatherAPI.getTemp(location).then(function(res) {
            that.setState(
                {
                    location: location,
                    temp: res,
                    isLoading:false
                });
            //that.setState({isLoading: false})
        },function(err) {
            that.setState({isLoading:false})
            alert(err)
        })
        
    },
    render: function() {
        var state = this.state;
        function renderMessage() {
            if (state.isLoading) {
                return <h2>Fetching Result...</h2>
            } else if (state.location && state.temp) {
                return <WeatherMessage searchResult={state}/>
            }
        };
        return (
            
            <div>
                <h2>Weather Component</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
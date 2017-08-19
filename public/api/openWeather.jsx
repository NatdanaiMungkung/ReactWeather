var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?appid=ceb45833569cd6b5034b2c1c6422c7cb&units=metric';

//find?q=Bangkok&
module.exports = {
    getTemp: function(location) {
        var url = OPEN_WEATHER_MAP_URL + "&q=" + encodeURIComponent(location);
        return axios.get(url).then(function(res) {
            if (res.data.cod != 200) {
                throw new Error(res.data.message);
            } else {
                return res.data.list[0].main.temp;
            }
        },function(res) {
            throw new Error(res.data.message);
        });
    }
}
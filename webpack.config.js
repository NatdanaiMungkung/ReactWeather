module.exports = {
    entry: './public/react.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'public/components/Main.jsx',
            Nav: 'public/components/Nav.jsx',
            Weather: 'public/components/Weather.jsx',
            About: 'public/components/About.jsx',
            Examples: 'public/components/Examples.jsx',
            WeatherForm: 'public/components/Weather-Form.jsx',
            WeatherMessage: 'public/components/Weather-Message.jsx',
            OpenWeatherAPI: 'public/api/openWeather.jsx'
            // GreeterMessage: 'public/components/GreeterMessage.jsx',
            // GreeterForm: 'public/components/GreeterForm.jsx'
        },
        extension: ['','.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
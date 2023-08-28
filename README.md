# Weather App 
This is a [Next.js](https://nextjs.org/) project that uses [OpenWeather](https://openweathermap.org/api) REST API. This repository does not contain an API key you will need to get your own at [OpenWeather.org](https://openweathermap.org/api). Once you've have signed up and obtained an API key create a .env file to your root folder. Enter NEXT_PUBLIC_WEATHER_KEY=[YOUR API KEY HERE] without the brackets into the .env file and hit save.

## Getting Started

### Install
1) [node.js](https://nodejs.org/dist/v16.16.0/node-v16.16.0-x64.msi)
2) [yarn](https://github.com/yarnpkg/yarn/releases/download/v1.22.19/yarn-1.22.19.msi) for .msi download
    or [mirror](https://github.com/yarnpkg/yarn/releases/tag/v1.22.19) if the .msi doesn't work
   
## Usage
1) Navigate to the weather-app folder(cd weather-app)
2) Run "npm install --global yarn" in the extracted folder
3) Run "yarn install" to fully install node.js, yarn, and the other dependencies into the project
4) Run "yarn dev" and Open [http://localhost:3000](http://localhost:3000) with your browser to view the project

## Description
This application has the user input the name of a city or zip code and if the information entered is valid shows weather information related to the entered value.
  Will send an error if the information entered is spelled incorrectly, already loaded, or empty.
  If the entry is valid a loading spinner will be shown followed by the weather data for the entered location which      includes:
    Temperature,
    Weather Type (Cloudy, Rainy, etc.),
    Feels like Temperature,
    Wind Speed,
    Name of location,
    Humidity

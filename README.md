# Weather App 
This is a [Next.js](https://nextjs.org/) project that uses OpenWeather REST API (https://openweathermap.org/api)

## Getting Started

### Install
1) node.js https://nodejs.org/dist/v16.16.0/node-v16.16.0-x64.msi
2) yarn https://github.com/yarnpkg/yarn/releases/download/v1.22.19/yarn-1.22.19.msi for .msi download
    or https://github.com/yarnpkg/yarn/releases/tag/v1.22.19 if the .msi doesn't work
   
## Usage
1) Run "npm install --global yarn" in the extracted folder
2) Run "yarn install" to fully install node.js, yarn, and the other dependencies into the project
3) Run "yarn dev" and Open [http://localhost:3000](http://localhost:3000) with your browser to view the project

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

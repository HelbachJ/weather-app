import Image from "next/image";
import React from "react";
import Transition from "./Transition";

{/* Component in charge of parsing information from the OpenWeather API. */}
const Weather = ({ data }) => {
  console.log(data);
  return (
    <Transition>
      <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
        {/* Displays the weather type and icon as well as the temperature. */}
        <div className="relative flex justify-between pt-12">
          <div className="flex flex-col items-center">
            {/* Displays weather icon related to the weather type. */}
            <Image
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="/"
              width="100"
              height="100"
            />
            {/* Displays weather type in text. */}
            <p className="text-2xl">{data.weather[0].main}</p>
          </div>
          {/* Displays Temperature in Farenheight. */}
          <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;F</p>
        </div>
        {/* Displays the location and additional weather data including feels like temp, humidity, and wind speed. */}
        <div className="bg-black/50 relative p-8 rounded-md">
          {/* Displays the location. */}
          <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
          <div className="flex justify-between text-center">
            {/* Displays feels like temperature. */}
            <div>
              <p className="font-bold text-2xl">
                {data.main.feels_like.toFixed(0)}&#176;F
              </p>
              <p className="text-xl">Feels Like</p>
            </div>
            {/* Displays Humidity. */}
            <div>
              <p className="font-bold text-2xl">{data.main.humidity}%</p>
              <p className="text-xl">Humidity</p>
            </div>
            {/* Displays wind speed in Miles Per Hour. */}
            <div>
              <p className="font-bold text-2xl">
                {data.wind.speed.toFixed(0)} MPH
              </p>
              <p className="text-xl">Winds</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Weather;

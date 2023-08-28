import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import Weather from "../components/Weather";
import Background from "../assets/background.jpg";
import Search from "../components/Search";
import ErrorModal from "../components/ErrorModal";
import Spinner from "../components/Spinner";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [checkZip, setCheckZip] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  {
    /* Sets state to true and sets the error message state to whatever error occurs */
  }
  const openErrorModal = (errorMessage) => {
    setErrorMessage(errorMessage);
    setIsErrorModalOpen(true);
  };

  {
    /* Sets state to false and sets the error message to an empty string */
  }
  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
    setErrorMessage("");
  };

  {
    /* Controls the fetching and error cases of the OpenWeather API */
  }
  const fetchWeather = async (city) => {
    const newZipArray = [...checkZip.slice(1), city]; //Removes the first item of the checkZip array

    {
      /* Decides which API to fetch depending on what is entered. If a city is entered (Not a Number) it fetches the location information from the backend.
          If its a zip code it fetches the zip code information from teh backend */
    }
    const url = isNaN(city)
      ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=imperial`
      : `https://api.openweathermap.org/data/2.5/weather?zip=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=imperial`;

    {
      /* Determines whether or no to fetch the data. Returns with error messages if the entered value is empty, repeated, or incorrect */
    }
    if (!city) {
      openErrorModal("ERROR! Please enter a city name or zip code.");
      return;
    } else if (
      city.toLowerCase() === weather?.name?.toLowerCase() ||
      checkZip.includes(city)
    ) {
      openErrorModal(
        "ERROR! Weather for this location is currently displayed. Please enter another location."
      );

      return;
    } else {
      try {
        const response = await axios.get(url);
        {
          /* Fetches the data if the entered data is a valid entry */
        }
        if (response.status === 200) {
          setIsLoading(true); //Activates the loading spinner
          {
            /* Sets a 1 second timeout (any form of timeout is necessary for the transitions to take effect) */
          }
          setTimeout(() => {
            const weatherData = response.data;
            setWeather(weatherData);
            setCheckZip([...checkZip, city]); //Adds entered info into an array so you cannot do repeat entries
            setIsLoading(false);
            setCheckZip(newZipArray); //Deletes first item in the array once a different value is entered
          }, 1000);
          setWeather({}); //Empties the setWeather state
        } else {
          console.error("Failed to fetch weather data");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        openErrorModal(
          "ERROR! Failed to fetch weather data. Make sure entered city/zip code is correct"
        );
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <Head>
      {/* Tab info */}
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/weather.png" />
      </Head>
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/15 z-[1]" />
      {/* Background image */}
      <Image src={Background} layout="fill" className="object-cover" />

      {/* Calls Search Component and searches the weather for the entered city upon submition. Submitting info is disabled while data is being fetched*/}
      {<Search onSearch={fetchWeather} disabled={isLoading} />}
      {/* Calls ErrorModal component and opens the error modal if an error occurs */}
      {isErrorModalOpen && (
        <ErrorModal message={errorMessage} onClose={closeErrorModal} />
      )}
      {/* Calls Spinner Component if the info is loading else it parses the weather data in the weather component depending on what was entered*/}
      {isLoading ? <Spinner /> : weather.main && <Weather data={weather} />}
    </div>
  );
}

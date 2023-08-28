import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

{/*Component in charge of the search bar and search function*/}
const Search = ({ onSearch }) => {
  const [city, setCity] = useState("");

  {/*Calls the onSearch function*/}
  const submitHandler = (event) => {
    event.preventDefault();
    onSearch(city);
  };

  return (
    <AnimatePresence>
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10">
        {/*Prompts user to enter a city or zip code and upon submition passes that information through the onSearch function*/}
        <form
          onSubmit={submitHandler} //
          className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
        >
          <div>
            {/*Sets the city state to the value entered in the search bar*/}
            <input
              onChange={(event) => setCity(event.target.value)}
              className="bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-white"
              type="text"
              placeholder="Search city or zip code"
            />
          </div>
          {/*Submits the form upon clicking the button.*/}
          <motion.button
            onClick={submitHandler}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <BsSearch size={23} />
          </motion.button>
        </form>
      </div>
    </AnimatePresence>
  );
};

export default Search;

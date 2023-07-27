import React from "react";
import { Dropdown } from 'flowbite-react';



function CustomDropdown({ value, options, changeHandler }) {

  const dropdownOptions = (id ,text) => ( <Dropdown.Item key={id} onClick={() => changeHandler(text)}><span className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{ text }</span></Dropdown.Item >)
  return (
    <div className="bg-red-500 rounded-lg font-info focus:[&_button]:ring-red-300">
      <Dropdown label={'Sort By : ' + value} >
        { options.filter((text) => text !== value).map((text, id) => dropdownOptions(id, text)) }
      </Dropdown>
      {/* <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="h-12 bg-gray-50 text-gray-700 border border-gray-300 focus:ring-2 focus:outline-none focus:border-red-300 focus:ring-red-300 hover:border-red-400 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          <span className="font-info">Sort By </span> : { value } 
        <svg className="w-2.5 h-2.5 ml-2.5 text-gray-400 hover:text-red-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
      </svg></button>
      <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg drop-shadow-lg	 w-24 dark:bg-gray-700 border border-red-400 border-collapse">
          <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton" >
            { options.filter((text) => text !== value).map((text, id) => dropdownOptions(id, text)) }
          </ul>
      </div> */}
    </div>
  );
}

export default CustomDropdown;

import React from 'react';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { Navbar } from 'flowbite-react';
import { Link, redirect, useNavigate } from "react-router-dom";
import { useState } from 'react';


export default function Nav() {
    const [query, setQuery] = useState('')
    const navigate = useNavigate();

    return (
        <Navbar
            fluid
        >
            <div>
                <Link to='/'>
                    <h3 className="self-center font-site_name whitespace-nowrap text-3xl text-red-500 font-semibold dark:text-white">
                        NewsApp
                    </h3>
                </Link>
            </div>
            {/* <div>
                <div className='flex items-center'>
                    <Flowbite>
                        <DarkThemeToggle></DarkThemeToggle>
                    </Flowbite>
                </div>
            </div> */}
            <Navbar.Toggle />
            <Navbar.Collapse>
                <div>
                    <div>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input value={ query } onKeyUp={(e) => e.key === 'Enter' && navigate(`/results/${query}`)} onChange={(e) => setQuery(e.target.value)} type="search" id="default-search" className="block w-full p-3 pl-8 text-sm font-accent font-semibold text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-300 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="keyword" required />
                            <button onClick={() => query && navigate(`/results/${query}`)} className="text-white font-accent absolute right-2.5 bottom-2.5 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </div>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}





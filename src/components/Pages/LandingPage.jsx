import React from 'react'
import Navbar from '../sections/Navbar.jsx';
import TopHeadlines from '../sections/TopHeadlines.jsx';
import CategoryTab from '../sections/CategoryTab.jsx';
import SearchPage from './SearchPage.jsx';
import TopSources from '../sections/TopSources.jsx';
import { DataProvider } from '../Contexts/MainContext.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate 
} from "react-router-dom";


function MainPage(){
  return (
  <>
    <CategoryTab ></CategoryTab>
    <TopHeadlines ></TopHeadlines>
    <TopSources></TopSources>
  </>
  )
}

function LandingPage() {
    return (
      <div className='bg-background min-h-screen'>
        <DataProvider>
          <Router>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<MainPage />} exact/>
              <Route path='/results/:query' element={<SearchPage />} />
              <Route path='/results/' element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </DataProvider>
      </div>
    )
}

export default LandingPage;
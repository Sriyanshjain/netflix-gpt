import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux'
import Footer from './Footer'



const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  
  return (
    <div className='font-sans'>
      <Header/>
      {
        showGptSearch?<GptSearch/>:<><MainContainer/>
        <SecondaryContainer/></>
      }
      <Footer/>
      
    </div>
  )
}

export default Browse
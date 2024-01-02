import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addWatchMovie } from "../utils/moviesSlice";
import { useNavigate } from "react-router-dom";

const useMovieWatch=(movieId)=>{
    const dispatch=useDispatch();
    const {watchMovie}=useSelector((store)=>store.movies);
    const navigate= useNavigate()
useEffect(()=>{
getWatchMovie();
},[])
const getWatchMovie=async()=>{

    try{
    const data= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS)
    const json= await data.json();

    const trailerList= json.results?.filter((video)=>video?.type==="Trailer");
    const trailer= trailerList?.length>0?trailerList[0]:json.results[0];
    dispatch(addWatchMovie(trailer));
    }
    catch(error){
     navigate("/error")
    }
}
}

export default useMovieWatch;
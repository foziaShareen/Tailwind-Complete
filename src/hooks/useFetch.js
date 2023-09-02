import React from 'react';
import  { useEffect ,useState} from 'react';



export const useFetch = (apiPath) => {
    const[data,setData]= useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=9c79c09c0a980777387b9e6fa37bcdb3&language=en-US&page=1`



    useEffect(()=>{
        async function fetchMovies(){
          const response=await fetch(url)
           const json= await response.json()
          setData(json.results)
        }
      fetchMovies() 
      },[url])
  return  {data}
    
  
}


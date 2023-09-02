import React, { useEffect ,useState} from 'react';
import {Link} from 'react-router-dom'
import { Card } from '../components';
import { useFetch } from '../hooks/useFetch';
export const MovieList = ({apiPath}) => {


  const{data:movies}= useFetch(apiPath);

  
  return (
    <main>
        <section className='py-3 mx-auto max-width-7xl'>
    <div className='flex flex-wrap justify-start'>
      {movies.map((movie)=>(
        
        <Card key={movie.id} movie={movie}/>
      ))}
       
    
     </div>
    
    </section>
      </main>
  )
}

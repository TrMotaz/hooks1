
import './App.css';
import Navi from './components/Navi';
import Filter from './components/Filter';
import Add from './components/Add';
import {useState} from 'react';
import MovieList from './components/MovieList';
import {movies} from './components/movies';

function App() {
  const [movieList,SetMovieList] = useState(movies)



  return (
    <div className="App">
     <Navi/>
     <Filter/>
     <Add/>
     <MovieList movieList={movieList} />

    </div>
  );
}

export default App;

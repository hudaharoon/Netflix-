import logo from './logo.svg';
import './App.css';

import Row1 from './components/Row1';
import Banner from './components/Banner';
import NavBar from './components/NavBar';

import { requests } from './components/request';
function App() {
  return (

    <div>
      <NavBar />
      <Banner fetchurl={requests.fetchNetflixOriginals} />
      <Row1 title="NetflixOriginals" fetchurl={requests.fetchNetflixOriginals} />
      <Row1 title="Trending" fetchurl={requests.fetchTrending} />
      <Row1 title="TopRated" fetchurl={requests.fetchTopRated} />
      <Row1 title="ActionMovies" fetchurl={requests.fetchActionMovies} />
      <Row1 title="ComedyMovies" fetchurl={requests.fetchComedyMovies} />
      <Row1 title="HorrorMovies" fetchurl={requests.fetchHorrorMovies} />
      <Row1 title="RomanceMovies" fetchurl={requests.fetchRomanceMovies} />
      <Row1 title="Documentaries" fetchurl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

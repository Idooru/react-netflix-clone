import Nav from "./components/Nav";
import Banner from "./components/Banner";
import "./App.css";
import Row from "./components/Row";
import requests from "./api/request";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>

      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}></Row>

      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}></Row>

      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      ></Row>

      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      ></Row>
    </div>
  );
}

export default App;

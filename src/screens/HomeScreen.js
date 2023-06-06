import React from 'react';
import Row from '../Row';
import requests from '../requests'
import Banner from '../Banner';
import Nav from '../Nav';
import './HomeScreen.css';


function HomeScreen(){
    return(
        <div className="homeScreen">
            <Nav/>
            <Banner/>

            <Row
            title="NETFLIX ORIGINALS"
            fetchURL={requests.fetchNetflixOriginals}
            isLargeRow
            />

            {/*props added to rows like title, fetchUrl etc. and isLargeRow(isLargeRow={True}) is if the row is large i.e large posters then it is true*/}

        <Row title="TRENDING NOW" fetchURL={requests.fetchTrending}/>
        <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
        

        </div>
    );
}

export default HomeScreen;
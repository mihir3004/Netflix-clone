import React from "react";
import requests from "../request";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Row from "./Row";

function HomeScreen() {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Row
                title="Netflix Originals"
                fetchURL={requests.fetchNetflixOriginals}
                isLarge={true}
            ></Row>
            <Row title="Trending Now" fetchURL={requests.fetchTrending}></Row>
            <Row title="Top Rated" fetchURL={requests.fetchTopRated}></Row>
            <Row
                title="Action Movies"
                fetchURL={requests.fetchActionMovie}
            ></Row>
            <Row
                title="Comedy Movies"
                fetchURL={requests.fetchComedyMovie}
            ></Row>
            <Row
                title="Horror Movies"
                fetchURL={requests.fetchHorrorMovie}
            ></Row>
            <Row
                title="Romance Movies"
                fetchURL={requests.fetchRomanceMovie}
            ></Row>
            <Row
                title="Documentaries"
                fetchURL={requests.fetchDocumentaries}
            ></Row>
        </div>
    );
}

export default HomeScreen;

import React from 'react';
import Flex from "./Header/Flex"
import TheLatest from "./The Latest/TheLatest"
import LatestArticles from "./Latest Articles/LatestArticles"
import LatestStories from "./Latest Stories/LatestStories"
import "./home.css"


const Home =() => {
    return (
       
        <div>
             <Flex /> 
            <TheLatest />
            <LatestArticles />
            <LatestStories />   
        </div>
    
    );
}

export default Home;
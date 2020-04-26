import React from "react";
import WelcomingMoviesList from "../components/WelcomingMovieList";

const Welcome = () => (
<div className="welcome-message">
    <h1>Welcome to movies world!
    <p>Here you can find posts about your favourite movies.</p>
    <p>Just go to the search page and enter title of the film 
    you would like to find.</p>
    <p>Enjoy!</p>
    </h1>
    <WelcomingMoviesList/>
</div>
);

export default Welcome;
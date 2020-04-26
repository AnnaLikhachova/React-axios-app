import React from "react";

const CreateAPI = () => (
    <div className="create-api">
        <h1>Calling the API</h1>
        <div>
            <p>The OMDb API is a RESTful web service to obtain movie information.
            We use Component to make an API call to the OMBd endpoint and retrieve the movie data we need.
            The easiest way is to use Axios.</p>
            <p>We'll add the axios call in the MovieCard's componentDidMount lifecycle.
            Axios.get() will return a promise containing the response from API.
            Then by calling the setState method we save the response into MoviesList and WelcomingMovieList.</p>
            <p className="cmd-axios">
                <img src="/static/images/axios.png" alt="axios"/>   
            </p>
            <p>You need your personal apikey to get succesful responce from API endpoint. You can get one from the OMDb website. </p>
        </div>
    </div>
    );

export default CreateAPI;
import React from "react";

const HowToHost = () => (
    <div className="how-to-host">
    <h1>Get started with Firebase Hosting</h1>
    <div>    
    <div>Firebase hosting is a Google hosting service. It provides static 
    web content to the user in a secure, fast, free and easy way.
    Firebase Hosting gives a reliable way to host  app's static assets 
    (HTML, CSS, JavaScript, media files, etc.) as well as to host microservices.
    Hosting serves the content over SSL, by default, and can be used with your own custom domain or on 
    project's free subdomains on web.app and firebaseapp.com.
    Before setting up Firebase Hosting, you need to create a Firebase project.</div>
    <p><b>Step 1: Install the Firebase tools inside react project</b></p>
    <p className="cmd">npm install -g firebase-tools</p>
    <p><b>Step 2: Deploy your app</b></p>
    <p className="cmd">npm run build</p>
    <p><b>Step 3: Install the Firebase CLI</b></p>
    <div>Now it's time to connect your local computer to your Firebase account. 
        You can log in to Firebase using the following command. 
        You will be redirected to the Google authentication web page.</div>
    <p className="cmd">firebase login</p>

    <p><b>Step 4: Initialize your project</b></p>
    <div>To connect your local project to your Firebase project, run the following command 
    from the root of your local project directory:</div>
    <p className="cmd">firebase init</p>

    <div>During project initialization you shoul select options for your project:</div>
    <ul>
    <li><b>Select to set up Hosting.</b></li>
    <div> Select this option - Hosting: Configure and deploy Firebase Hosting site.</div>
    <li><b>Select a Firebase project to connect to your local project directory.</b>
    <div>The selected Firebase project is your "default" Firebase project for your local project directory. 
    </div>
    </li>
    <li><b>Specify a directory to use as your public root directory.</b>
    <div>This directory contains all your publicly served static files, 
        including your index.html file and any other assets that you want to deploy to Firebase Hosting.
    The default for the public root directory is called <b>public</b>.Here you should type - build.</div>
    <div>You can specify your public root directory now or you can specify it later in your firebase.json 
    configuration file.
    </div>
    </li>
    <li><b>Choose a configuration for your site.</b>
    <div>If you select to make a one-page app, then Firebase automatically adds rewrite configurations for you.
    At the end of initialization, Firebase automatically creates and adds two files to the root of your 
    local app directory:</div>
    <p>A firebase.json configuration file that lists your project configuration.</p> 
    <p>A .firebaserc file that stores your project aliases.</p>
    </li>
    </ul>
    <p><b>Step 5: Deploy to your site</b></p>
    <div>To deploy to your site, run the following command from the root of your local project directory:</div>
    <p className="cmd">firebase deploy</p>
    <div>This command deploys a release to your Firebase project's default Hosting sites:</div>
    <p>projectID.web.app</p>
    <p>projectID.firebaseapp.com</p>
    </div>
    </div>
    );

export default HowToHost;
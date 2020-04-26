import React  from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Navigation from './Navigation';
import MainMenu from './MainMenu';
import './App.css';
import Footer from './components/Footer';

function App() {
    return (
    <>
     <BrowserRouter > <Navigation />
     <Switch >
          {
            MainMenu.map( (route, key) => {
              return (
                <Route key={key} {...route} />
              )
            })
          }
      </Switch> 
    </BrowserRouter> 
    <Footer/>
    </>
    );
  }
  
  
  export default App;
import React from 'react'
import { NavLink } from 'react-router-dom';
import MainMenu from './MainMenu';

const Navigation = () => (
    <nav className="header">
        {
            MainMenu.map( (route, key) => {
                if( route.path && !route.dontShowInMenu){
                    return(
                        <div className="menu-nav">
                        <NavLink  key={key} to={route.path}>
                            { route.title}
                        </NavLink>
                        </div>
                    )
                }
                
            })
        }
        <div className="fab-react"><a  href="https://reactjs.org"><img src="/static/images/react-brands.svg" alt="react"/></a></div>
    </nav>
);

export default Navigation;
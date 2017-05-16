import  React from 'react';
import ReactDOM from 'react-dom';
import BeerSearch from './src/components/BeerSearch.jsx';
import NavBar from './src/components/NavBar.jsx';

import Home from './src/components/Home.jsx';
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';


window.onload = function() {
    var formDiv = document.getElementById("content");
    var navBar = document.getElementById("navBar");
    console.info(formDiv)

    ReactDOM.render(<NavBar/>, navBar);

    ReactDOM.render( (<HashRouter>

                             <Route exact path="/" component={Home} />
                             <Route exact path="/search" component={BeerSearch} />

                      </HashRouter>
    ), formDiv);
}
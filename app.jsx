import  React from 'react';
import ReactDOM from 'react-dom';
import BeerSearch from './src/components/BeerSearch.jsx';
import NavBar from './src/components/NavBar.jsx';

import Home from './src/components/Home.jsx';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/ReactiveBeer/' component={Home}/>
            <Route path='/search' component={BeerSearch}/>
        </Switch>
    </main>
)

const App = () => (
  <div>
      <NavBar/>
      <Main/>
  </div>
);

window.onload = function() {
    var contentDiv = document.getElementById("content");

    ReactDOM.render( (<BrowserRouter>
                            <App/>
                      </BrowserRouter>
    ), contentDiv);
}
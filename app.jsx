import  React from 'react';
import ReactDOM from 'react-dom';
import BeerSearch from './src/components/BeerSearch.jsx';



window.onload = function() {
    var formDiv = document.getElementById("searchForm");
    console.info(formDiv)
    ReactDOM.render(<BeerSearch/>, formDiv);
}
import React, {Component} from 'react';

import BeerSearchForm from './BeerSearchForm.jsx';
import BeerSearchResult from './BeerSearchResult.jsx';

import {beerApiKey} from '../config/keys.jsx';
import fetchJsonp from 'fetch-jsonp';

const $ = require('jquery');

console.info(fetchJsonp);
export  default  class BeerSearch extends Component {

    searchHandler(searchData) {
       const beerName = searchData.beerName;
       const self = this;

        $.ajax({
            type : "Get",
            url :`http://api.brewerydb.com/v2/search?key=${beerApiKey}&type=beer&q=${beerName}`,
            dataType :"jsonp",
            jsonp: false,
            jsonpCallback: "myJsonMethod",
            success : function(data){
                alert(data);},
            error : function(httpReq,status,exception){
                alert(status+" "+exception);
            }
        });

        /*fetchJsonp(`http://api.brewerydb.com/v2/search?key=${beerApiKey}&type=beer&q=${beerName}`).then(
                function (response) {
                    console.info(response);
                    self.refs["result"].setResult(response.data);


                }

        );*/



    }

    render(){
        const self = this;
        return (<div><BeerSearchForm handler = {self.searchHandler.bind(self)}/><br/><BeerSearchResult ref="result"/></div>);
    }
}
import React, {Component} from 'react';
import urlRequest, {METHODS, TECHNIQUES, RESPONSE_TYPES} from '../utilities/request_utils.jsx';

import BeerSearchForm from './BeerSearchForm.jsx';
import BeerSearchResult from './BeerSearchResult.jsx';

import {beerApiKey} from '../config/keys.jsx';

const $ = require('jquery');

export  default  class BeerSearch extends Component {

    searchHandler(searchData) {
       const beerName = searchData.beerName;
       const self = this;

        urlRequest(`http://api.brewerydb.com/v2/search?key=${beerApiKey}&type=beer&q=${beerName}`, function(err, resp){
                if(err){
                    alert(err);
                   console.error(err);
                    return;
                }

                let data = resp.data.sort(function(a, b){return a.name.localeCompare(b.name)});

                data = data.filter((val, index) => index == 0 || data[index].name != data[index-1].name );

                self.refs["result"].setResult(data);
            },
            {
                method : METHODS.GET,
                technique : TECHNIQUES.CORS,
                responseType : RESPONSE_TYPES.JSON,
                withProxy : true,
                headers : {
                    origin: "http://api.brewerydb.com"
                }
            }
        );

    }

    render(){
        const self = this;
        return (<div><BeerSearchForm handler = {self.searchHandler.bind(self)}/><br/><BeerSearchResult ref="result"/></div>);
    }
}
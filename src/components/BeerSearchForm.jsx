import React, {Component} from "react";
import BSFormInput from '../widgets/BSFormInput.jsx';
import BSButton from '../widgets/BSButton.jsx';


export default class BeerSearchForm extends Component {
    constructor(props){


        super(props);
    }

    handleSearch(){
        const data = {};

        for( let ref in this.refs){
            if(this.refs[ref] instanceof BSFormInput){
                data[ref] = this.refs[ref].getValue();
            }
        }

        this.props.handler(data);

    }
    
    render(){
        var self = this;
        return (<div>
                    <BSFormInput ref="beerName" placeholder="Type the name of a beer you want to search" id="beerName" label="Beer name"/>
                    <BSButton label = "Search" clickhandler={this.handleSearch.bind(self)}/>
                </div>
            )
    }
}
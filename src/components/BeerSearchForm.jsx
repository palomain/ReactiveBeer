import React, {Component} from "react";
import BSFormInput from '../widgets/BSFormInput.jsx';
//import BSButton from '../widgets/BSButton.jsx';
import {Button, IconButton} from 'react-toolbox/lib/button';


import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';


export default class BeerSearchForm extends Component {
    constructor(props){


        super(props);
        this.state = {type:"beer"};
    }


    handleSearch(){
        const data = {};

        for( let ref in this.refs){
            const refEl = this.refs[ref];
            if(refEl instanceof BSFormInput){
                data[ref] = refEl.getValue();
            }
        }

        data.type = this.state.type;

        this.props.handler(data);

    }

    typeSelectedHandler(value){
        this.setState({type:value});
    }
    
    render(){
        const self = this;
        return (
            <div className="col-md-12 column ui-sortable" style={{padding:"10px"}}>

                    <div className="form-group">
                            <div style={{display:"block"}}>
                                <span style={{cssFloat:"left"}}>Search for:</span>
                                <RadioGroup name="radio" value={self.state.type} onChange={self.typeSelectedHandler.bind(self)}ref="type" className="radio-buttons">
                                    <RadioButton
                                        value="beer"

                                        label="Beers"

                                    />
                                    <RadioButton
                                        value="brewery"

                                        label="Breweries"
                                    />
                                    <RadioButton
                                        value="guild"

                                        label="Guilds"
                                    />
                                    <RadioButton
                                        value="event"

                                        label="Events"
                                    />
                                </RadioGroup>
                            </div>

                            <BSFormInput ref="searchs" placeholder="Type here" id="searchs" />
                            <Button label="Search" onMouseUp={self.handleSearch.bind(self)} flat />
                    </div>





            </div>
            )
    }
}

//<BSButton label = "Search" clickhandler={this.handleSearch.bind(self)}/>
import React, {Component} from "react";
import BSFormInput from '../widgets/BSFormInput.jsx';
//import BSButton from '../widgets/BSButton.jsx';
import {Button, IconButton} from 'react-toolbox/lib/button';

import 'icheck/skins/all.css'; // or single skin css
import {RadioGroup, Radio} from 'react-icheck';


export default class BeerSearchForm extends Component {
    constructor(props){


        super(props);
    }

    handleSearch(){
        const data = {};

        for( let ref in this.refs){
            const refEl = this.refs[ref];
            if(refEl instanceof BSFormInput || refEl instanceof RadioGroup){
                data[ref] = refEl.getValue();
            }
        }

        this.props.handler(data);

    }

     mouseUpHandler(){
        console.info("button pressed");
    }
    
    render(){
        const self = this;
        return (
            <div className="col-md-12 column ui-sortable" style={{padding:"10px"}}>
                <form role="form">
                    <div className="form-group">
                            <div style={{display:"block"}}>
                                <span style={{cssFloat:"left"}}>Search for:</span>
                                <RadioGroup name="radio" value="beer" ref="type" label="Search for">
                                    <Radio
                                        value="beer"
                                        radioClass="iradio_square-blue"
                                        increaseArea="20%"
                                        label="Beers"

                                    />
                                    <Radio
                                        value="brewery"
                                        radioClass="iradio_square-blue"
                                        increaseArea="20%"
                                        label="Breweries"
                                    />
                                    <Radio
                                        value="guild"
                                        radioClass="iradio_square-blue"
                                        increaseArea="20%"
                                        label="Guilds"
                                    />
                                    <Radio
                                        value="event"
                                        radioClass="iradio_square-blue"
                                        increaseArea="20%"
                                        label="Events"
                                    />
                                </RadioGroup>
                            </div>

                            <BSFormInput ref="searchs" placeholder="Type here" id="searchs" />
                            <Button label="Search" onMouseUp={self.mouseUpHandler} flat />
                    </div>




                </form>
            </div>
            )
    }
}

//<BSButton label = "Search" clickhandler={this.handleSearch.bind(self)}/>
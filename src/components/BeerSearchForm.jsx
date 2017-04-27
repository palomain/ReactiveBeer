import {Component} from "react";
import BSFormInput from '../widgets/BSFormInput';
import BSButton from '../widgets/BSButton';


export default class BeerSearchForm extends Component {
    constructor(props){
        super(props);
    }

    handleSearch(){
        const data = {};

        for( ref in this.refs){
            if(this.refs[ref] instanceof BSFormInput){
                data[ref] = this.refs[ref].getValue();
            }
        }

        let resp = this.props.handler(data);

        if(resp.failureMessage){
            alert(resp.failureMessage);
        }
    }



    render(){
        return (<BSButton label = "Search"/>)
    }
}
import React, {Component} from 'react';
const uuidV4 = require('uuid/v4');
const $ = require('jquery');

export default  class  BSFormInput extends Component{

    constructor(props){
        super();
    }

    componentWillMount() {
        this.id = this.props.id || uuidV4();
    }

    getDefaultProps(){
        return {
            width : "100px"
        }
    }

    getValue(){
        return $("#"+this.id).val();
    }

    render(){

        return (<div className="form-group" >
                    <label htmlFor={this.id}>{this.props.label || ''}</label>
                    <input type="text" className="form-control" id={this.id} placeholder={this.props.placeholder || ''} />
                </div>)
    }
}

BSFormInput.propTypes = {
    label : React.PropTypes.string,
    placeholder : React.PropTypes.string,
    id : React.PropTypes.string
};


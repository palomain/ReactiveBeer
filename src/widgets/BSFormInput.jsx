import {Component} from 'react';
import {UUID} from "node-uuid";

export default  class  BSFormInput extends Component{

    constructor(props){
        super();
    }

    componentWillMount() {
        this.id = this.props.id || UUID.v4();
    }

    getDefaultProps(){
        return {
            width : "100px"
        }
    }

    getValue(){
        return $(this.id).val();
    }

    render(){
        return (<div htmlClass="form-group">
                    <label htmlFor={this.id}>{this.props.label || ''}</label>
                    <input type="text" htmlFor="form-control" id={this.id} placeholder={this.props.placeholder || ''} />
                </div>)
    }
}

BSFormInput.propTypes = {
    label : React.propTypes.string,
    placeholder : React.propTypes.string,
    id : React.propTypes.string
};


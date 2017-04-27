import {Component} from 'react';

export const ButtonTypes = {
    Primary : "btn-primary",
    Default : "btn-default",
    Success : "btn-success",
    Info : "btn-info",
    Warning : "btn-warning",
    Danger : "btn-danger",
    Link : "btn-link"
};

export const ButtonSizes = {
    Large : "btn-lg",
    Medium : "btn-md",
    Small : "btn-sm",
    XSmall : "btn-xs"

}

export default class BSButton extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if(this.props.cssClass){
            $.addClass(this.refs.bsbut, this.props.cssClass);
        }
    }

    getDefaultProps(){
        return {
            label : "Submit",
            type : ButtonTypes.Primary,
            size : ButtonSizes.Medium

        }
    }

    render(){
        const buttonClasses = "btn " + this.props.type + " " + this.props.size;
        return (<button type="button" ref ="bsbut" onClick={this.props.handler} htmlClass={buttonClasses}>{this.props.label}</button>)
    }

}

BSButton.propTypes = {
    label : React.propTypes.string,
    type  : React.propTypes.string,
    size  : React.propTypes.string,
    handler : React.propTypes.func.required
};



import React,  {Component} from 'react';

export default  class BeerSearchResult extends Component{

    setResult(results){
        this.setState({results : results});
    }

    render() {

        if(!this.state || !this.state.results){
            return (<span>{this.props.message}</span>)
        }

        return (<ul>{ this.state.results.map( function(result) {
            return <li>{result.name}</li>
        }  ) }  </ul> );
    }

}

BeerSearchResult.defaultProps = {
    message : "Click above and type the name of a beer you like!"
}
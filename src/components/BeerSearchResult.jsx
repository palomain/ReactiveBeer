import React,  {Component} from 'react';

const ROW_SIZE = 3;

export default  class BeerSearchResult extends Component{

    setResult(results){
        const resultsPartitions = new Array(Math.ceil(results.length/ROW_SIZE)).fill(null).map(()=>[]);

        for(let i = 0; i < results.length; i++){
            resultsPartitions[~~(i/ROW_SIZE)][i%ROW_SIZE] = results[i];
        }

        this.setState({results : resultsPartitions});
    }

    renderInfo(info){

        const imageInfo = info.labels || info.images || {};
        const image = imageInfo.medium || imageInfo.large || "" ;

        return (<div className="col-md-4">
                    <div className="thumbnail">
                        <img alt="Bootstrap Thumbnail First" src={image} style={{textAlign:"center"}}/>
                            <div className="caption" contenteditable="false">
                                <h3>{info.name}</h3>
                                <p>{info.description}</p>
                                <a href="#close" style={{cssFloat:"right"}} className="remove label label-success"><i className="glyphicon glyphicon-add"></i> Add to favourites</a>
                            </div>
                    </div>
                 </div>);
    }

    renderRows(){
        const self = this;

       return   this.state.results.map(function(row) {

           return (

               <div className="row">
                   {row.map(function(info){ return self.renderInfo(info); })}
               </div>

           );
       });
    }



    render() {

        if(!this.state || !this.state.results){
            return (<span>{this.props.message}</span>)
        }
        const self = this;
        return (
            <div className="col-md-12 column ui-sortable">
                <div className="box box-element ui-draggable" style={{display:"block"}}>

                    <div className="view">
                        {
                            self.renderRows.bind(self)()
                        }
                    </div>
                </div>
            </div>
        );
    }

}

BeerSearchResult.defaultProps = {
    message : "Click above and type the name of a beer you like!"
};


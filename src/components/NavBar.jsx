import React, {Component} from "react";


export default class NavBar extends Component {

    render(){
        return (<div>
            <ul className="nav nav-tabs" contenteditable="false">
                <li className="active"><a href="./">Home</a></li>
                <li><a href="./search">Search</a></li>
                <li className="disabled"><a href="#">Profile</a></li>
                <li className="dropdown pull-right">
                    <a href="#" data-toggle="dropdown" className="dropdown-toggle" aria-expanded="false">Login <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </li>
            </ul>
        </div>)
    }

}
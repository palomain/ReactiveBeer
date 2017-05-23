import React, {Component} from "react";
import { Link } from 'react-router-dom';


export default class NavBar extends Component {

    render(){
        return (<div>
            <ul className="nav nav-tabs" contenteditable="false">
                <li className="active"><Link to='/'>Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li className="disabled"><Link to="./profile">Profile</Link></li>
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
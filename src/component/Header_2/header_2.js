import React, { Component } from 'react';
import './header_2.css';
import Burger from './burger';
import brvuelogo from "../../images/brvue_logo.png";



class Header_2 extends Component {
    render(){
        return(
            
            <nav style={this.props.style}>
               <div className="logo2">
                  <img src={brvuelogo} className="navlogoimg"></img>
               </div>
               <Burger/>
            </nav>

        )
    }
}
export default Header_2;
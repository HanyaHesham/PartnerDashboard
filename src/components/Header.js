import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUtensils,faHome,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import './Header.css';
export default class Header  extends React.Component{
    state={

    }

    render(){
        return(
            <nav class="navbar navbar-expand navbar-dark bg-dark" id="PartnerNav" >
          
            <div class="collapse navbar-collapse " id="navbarText" >
                <ul class="navbar-nav ">
                &nbsp;
                <li class="nav-item active" >
                        <Link class="nav-link" to="/HanyaHesham/PartnerDashboard/Restaurant"><i class="fas">
                                    <FontAwesomeIcon  icon={faHome} /></i> Restaurant  </Link>
                </li>
                &nbsp; &nbsp;    &nbsp; &nbsp;
                <li class="nav-item">
                        <Link class="nav-link" to="/HanyaHesham/PartnerDashboard/Menu"><i class="fas">
                                    <FontAwesomeIcon  icon={faUtensils} /></i> Menu </Link> 
                </li>
              
                &nbsp; &nbsp;    &nbsp; &nbsp;
                <li class="nav-item">
                        <Link class="nav-link" to="/HanyaHesham/PartnerDashboard/Orders"><i class="fas">
                                    <FontAwesomeIcon  icon={faShoppingCart} /></i> Order </Link>
                </li>
                </ul>
  </div>
</nav>
        )
    }
}
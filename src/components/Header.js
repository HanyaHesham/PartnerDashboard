import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUtensils,faHome,faShoppingCart, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import './Header.css';
export default class Header  extends React.Component{
    state={
        profileicon:"block",
    }
    componentDidMount=()=>{
            if(localStorage.getItem('Partner') === null){
               // this.state.profileicon="none";
                this.setState({profileicon:"none"})
            }
    }

    render(){
        return(
            <nav class="navbar navbar-expand navbar-dark bg-dark" id="PartnerNav" style={{display:this.state.profileicon}}>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" ></span>
                  </button>
          
            <div class="collapse navbar-collapse" id="navbarText" >
                <ul class="navbar-nav ">
                &nbsp;
                <li class="nav-item" >
                        <Link class="nav-link" to="/HanyaHesham/PartnerDashboard/Profile"><i class="fas">
                                    <FontAwesomeIcon  icon={faUser} /></i> Profile  </Link>
                </li>
                &nbsp; &nbsp;    &nbsp; &nbsp;
                <li class="nav-item" >
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
                                    <FontAwesomeIcon  icon={faShoppingCart} /></i> Orders </Link>
                </li>

                &nbsp; &nbsp;    &nbsp; &nbsp;
                <li class="nav-item">
                        <Link class="nav-link" to="/HanyaHesham/PartnerDashboard/Login"
                            onClick={()=>{
                                localStorage.removeItem('Partner')
                                window.location.reload(false);
                                this.props.history.replace('/HanyaHesham/PartnerDashboard/Login')
                            }}>
                                <i class="fas">
                                    <FontAwesomeIcon  icon={faSignOutAlt} /></i> LogOut </Link>
                </li>
                </ul>
            </div>
            </nav>
        )
    }
}
import React from 'react';
import './Slidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faUtensils,faHome,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


class Slidebar extends React.Component {

    state = {
    
    }
    
    componentDidMount() {
        //this.setState({Rest:this.state.Rest})
    }

   
    render() {
       
        return (
               <>
         <div class="wrapmain">
                 <div class="wrapper">
                     <div class="sidebar" style={{color:'white'}}>
                        <ul>
                            <li class="nav-item">
                                <Link class="nav-link" to="/HanyaHesham/PartnerDashboard/Restaurant"><i class="fas">
                                    <FontAwesomeIcon  icon={faHome} /></i> Restaurant  </Link></li>
                            <li class="nav-item">  
                                <Link class="nav-link" to="/HanyaHesham/PartnerDashboard/AddMeal"><i class="fas">
                                    <FontAwesomeIcon  icon={faUtensils} /></i> Menu </Link> </li>
                            <li class="nav-item"> 
                                <Link class="nav-link" to="/HanyaHesham/PartnerDashboard/Orders"><i class="fas">
                                    <FontAwesomeIcon  icon={faShoppingCart} /></i> Order </Link></li>
                        </ul>
                     </div>
                     <div class="main-content">
                        <div class="header"> welcome</div>
                        <div class="info"> weme</div>
                      </div>
               </div>
          </div>
           
            
               </>
        )
    }

}

export default Slidebar;
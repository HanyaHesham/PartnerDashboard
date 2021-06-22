import React from 'react';
import './Slidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faUtensils,faHome,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';


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
                     <div class="sidebar">
                        <ul>
                            <li>  <a href="#"><i class="fas"><FontAwesomeIcon  icon={faHome} /></i></a> Restaurant  </li>
                            <li>  <a href="#"><i class="fas"><FontAwesomeIcon  icon={faUtensils} /></i> </a> menu  </li>
                            <li>  <a href="#"><i class="fas"><FontAwesomeIcon  icon={faShoppingCart} /></i></a> order </li>
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
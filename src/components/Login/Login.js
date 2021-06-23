import React from 'react';
import './Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faEyeSlash,
  faLock, faUser
} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';


export default class Login extends React.Component{
    state={
        ShowEye:"none",
        ShowEyeSlash:"block"
    }
    showPasswordHandler=()=>{
        if( this.state.passwordtype="password"){
             this.state.passwordtype="text"
             this.setState({passwordtype:"text",  ShowEye:"block",
         ShowEyeSlash:"none"})
        }
    }
    HidePasswordHandler=()=>{
         if( this.state.passwordtype="text"){
             this.state.passwordtype="password"
             this.setState({passwordtype:"password",  ShowEye:"none",
         ShowEyeSlash:"block"})
        }
    }
    componentDidMount(){
    }
    
    render(){
        return(
            <div class="container shadow col-8 col-lg-4" id="cont1">
            <div class="classRow row justify-content-center ">
                <div>
                    <div class="card shadow-lg border-0 rounded-lg mt-5" id="cardd">
                        <div class="card-body bg-transparent">
                        <div class="card-header " id="card-header">
                        <h1 class="text-center font-weight-light my-4" id="card-header-text">Welcome !</h1>
                        <h3 class="text-center ">Login to FoodAway portal</h3>
                        <br></br>
                        </div>
                            <form action="" method="POST" role="form">
                                 
                                <div class="form-group formgrps mt-3 ">
                                    <div class="input-group input-group">
                                         <div class="input-group-prepend">
                                             <span class="input-group-text inptxt" id="inputGroup-sizing-sm">
                                             <FontAwesomeIcon icon={faUser} />   </span>
                                         </div>
                                     <input type="text" class="form-control formcntrl" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="email" placeholder="Enter your Username"
                                       required 
                                    //    onchange={(Email)=>this.setState({Email})}
                                        onChange={(e)=>this.handleEmailChange(e.target.value)}/>
                                        <span style={{color: "red"}} class={this.state.classMail} >invalid Username</span>
                                    </div>
                                </div>
                                <br>
                                </br>
                                 <div class="form-group formgrps">
                                    <div class="input-group input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text inptxt " id="inputGroup-sizing-sm">
                                                 <FontAwesomeIcon icon={faLock} /></span>
                                        </div>
                                        <input type={this.state.passwordtype} class="form-control " aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm" placeholder="Password" required
                                            id="pass"
                                            //  onchange={(Password)=>this.setState({Password})}
                                            onChange={(e)=>this.handlePasswordChange(e.target.value)}/>
                                            <span style={{color: "red"}} class={this.state.classPass} >invalid Password</span>
    
                                            <div class="input-group-prepend">
                                                <span class="input-group-text inptxt" id="inputGroup-sizing-sm">  
                                                <FontAwesomeIcon icon={faEyeSlash}  onClick={this.showPasswordHandler} style={{display:this.state.ShowEyeSlash,cursor: "pointer"}}/>
                                                <FontAwesomeIcon icon={faEye} onClick={this.HidePasswordHandler} style={{display:this.state.ShowEye,cursor: "pointer"}}/>
                                                    {/* <FaEye onClick={this.HidePasswordHandler} style={{display:this.state.ShowEye,cursor: "pointer"}}/> */}
    
                                                    </span>
                                            </div>
                                    </div>
                                </div> 
                                 <div class="form-check mt-4 ml-1">
                                    <label class="form-check-label" />
                                        <input type="checkbox" class="form-check-input" name="" id="check" value="checkedValue" />
                                     Remember Me
                                    {/* </label>                               */}
                                </div>                           
                                <button  type="button" id="login" class='mybtn btn btn-primary btn-block mt-3 form-control formcntrl'  
                                onClick={()=>this.HandleExactData()} disabled={this.state.disabled} >Login</button>
                            </form>
                        </div>
                         <div class="card-footer text-center"  id="gotoregister">
                            <div class="d-flex justify-content-center mt-3">
                                <h6>Need an account?</h6>
                                <a href="/MariamShalaby11/Talabat-React/Register" class="ml-2" id="signup">Sign Up Now!</a>  
                            </div>
                        </div>
    
                    </div>
    
                </div>
            </div>
        </div>
        )
    }
}
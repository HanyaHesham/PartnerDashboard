import React from 'react';
import './Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faEyeSlash,
  faLock, faUser
} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { swal } from 'sweetalert';


export default class Login extends React.Component{
    state={
        Email:"",
        Password:"",
        ShowEye:"none",
        ShowEyeSlash:"block",
        classMail:"invisible",
        classPass:"invisible",
        passwordtype:"password",
        Partner:{}
    }
    handleEmailChange = (e) =>{
           const validUserName = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");

            if(!validUserName.test(e)){
            this.setState({classMail:"visible",Email:e,disabled:true})
            }else{
            this.state.disabled=false

            this.setState({classMail:"invisible",Email:e,disabled:false})
            
            }
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
    handlePasswordChange = (e) =>{
         const validPassword =  new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");

            if(!validPassword.test(e)){
            this.setState({classPass:"visible",Password:e,disabled:true})
            }else{
                this.state.disabled=false
            this.setState({classPass:"invisible",Password:e,disabled:false})
            }
    }
     GetCutomerID=()=>{
           axios.get(`https://localhost:44327/api/customer/${this.state.Email}`).then(res=>{
               console.log(res.data)
               this.setState({
                   Customer:res.data.CustomerId
               })
               localStorage.setItem('Customer',JSON.stringify(res.data));
               

           })
       }
        Login = (props) => {
           
            const config = {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Accept':'*/*'
                }
              }
              const configs = {
                headers: {
                  'Content-Type': 'application/json',
                  'Accept':'*/*'
                }
              }
              const params = new URLSearchParams()
                params.append('Email',this.state.Email)
                params.append('Password',this.state.Password)
               // params.append('grant_type', 'password')

        let URL='https://localhost:44327/api/partnerLogin'
            axios.post(URL, params, config).then(res=>{
                console.log(res);
                this.setState({classMail:"invisible"});               
               this.props.history.replace('Profile')              
                console.log(res.data)  
                this.state.Partner = res.data;
                this.setState({Partner:res.data});
                console.log(this.state.Partner);
                localStorage.setItem('Partner',JSON.stringify(res.data));

            }).catch(err=>{
                alert("plaese Enter correct Data");
                // swal.fire({
                // icon: 'error',
                // title: 'Oops...',
                // text: 'Something went wrong!',
                // footer: '<a href="">Why do I have this issue?</a>'
                // })
                //swal("plaese Enter correct Data");
               console.log(err); 
               this.setState({classMail:"visible"});
               // this.state.classMail="visible"
            }) ;
           // this.GetCutomerID();
        }
    componentDidMount(){
    }
    clickk=()=>{
        this.props.history.push('AppRouter')
    }
    render(){
        return(
            <div class="container shadow col-8 col-lg-4" id="cont1">
            <div class="classRow row justify-content-center ">
                <div>
                    <div class="card shadow-lg border-0 rounded-lg " id="cardd">
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
                                     <input type="text" class="form-control formcntrl" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="email" placeholder="Enter your E-mail"
                                       required 
                                    //    onchange={(Email)=>this.setState({Email})}
                                        onChange={(e)=>this.handleEmailChange(e.target.value)}/>
                                        <span style={{color: "red"}} class={this.state.classMail} >invalid E-mail</span>
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
                                onClick={()=>this.Login()} disabled={this.state.disabled} >Login</button>
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
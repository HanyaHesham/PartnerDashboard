import React  from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default class Profile extends React.Component{
    state={
        partner:{},
        PartenerId:JSON.parse(localStorage.getItem('Partner')).PartenerId,
        setShow:false,

    }

    handleShow=()=>{
        this.setState({setShow:true});
      }
      handleClose=()=>{
        this.setState({setShow:false});
      }


    componentDidMount(){
        this.getPartnerDetails()
    }

    getPartnerDetails(){
        axios.get(`https://localhost:44327/api/Partner/${this.state.PartenerId}`).then(res=>{
            this.setState({partner:res.data})
            console.log(res.data);
        });
    }


    setUsernameState=(e)=>{
        this.state.partner.Username=e.target.value
        this.setState({Username:this.state.partner.Username});
    }

    setFnameState=(e)=>{
        this.state.partner.FirstName=e.target.value
        this.setState({FirstName:this.state.partner.FirstName});
    }
    setLnameState=(e)=>{
        this.state.partner.LastName=e.target.value
        this.setState({LastName:this.state.partner.LastName});
    }
    setEmailState=(e)=>{
        this.state.partner.Email=e.target.value
        this.setState({Email:this.state.partner.Email});
    }
    setPasswordState=(e)=>{
        this.state.partner.Password=e.target.value
        this.setState({Password:this.state.partner.Password});
    }
    setCPasswordState=(e)=>{
        this.state.partner.CPassword=e.target.value
        this.setState({CPassword:this.state.partner.CPassword});
    }

    customEdit=()=>{
        this.handleClose();
        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept':'/'
            }
          }

          const params=new URLSearchParams();
          params.append('PartenerId', this.state.partner.PartenerId)
          params.append('Username', this.state.partner.Username)
          params.append('FirstName', this.state.partner.FirstName)
          params.append('LastName', this.state.partner.LastName)
          params.append('Email', this.state.partner.Email)
          params.append('Password', this.state.partner.Password)
          params.append('CPassword', this.state.partner.CPassword)
          params.append('Approval', 1)



          let URL=`https://localhost:44327/api/editPartner/${this.state.partner.PartenerId}`

          axios.post(URL, params, config).then(res=>{
              console.log(res);
              alert("Data Updated Successfully");         
          })
          .catch(error=>{
            console.log(error)   
           })
          console.log(this.state.partner);

    }

    render(){
        return(
            <>
                <div class="container shadow p-3 mb-5 bg-white rounded" style={{marginTop:50}}>
                <h2 style={{color:"brown", textAlign:'center'}}>My Account</h2>
                <hr></hr>

                <div class="row" >
                       
                     <div class="col col-md-12">
                         <h3 style={{color:"brown", textAlign:'center'}}>{this.state.partner.FirstName} {this.state.partner.LastName}</h3>
                         <h4 style={{textAlign:'center'}}>Username: {this.state.partner.Username}</h4>
                         <h4 style={{textAlign:'center'}}>Email: {this.state.partner.Email}</h4>
                         <button className="btn btn-success col-4 offset-4 mt-5 mb-5" onClick={this.handleShow}> Edit My Account < FontAwesomeIcon icon={faEdit}/></button>
                         <Modal show={this.state.setShow}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                >
                                <Modal.Header>
                                    <h5 style={{color:'#810000'}}>Edit My Account</h5>
                                    <button className="close" onClick={this.handleClose} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </Modal.Header>
                                <Modal.Body>
                                {                        
                        <form class="needs-validation" novalidate>                                                      
                        <div class="form-group row">
                                <label htmlFor="text" class="col-sm-4 col-form-label thandlabel">Username</label>
                                <div class="col-sm-8">
                                <input type="text" className="form-control inputt"  value={this.state.partner.Username|| ''} onChange={(e)=>this.setUsernameState(e)}></input></div>
                         </div>

                         <div class="form-group row">
                                <label htmlFor="text" class="col-sm-4 col-form-label thandlabel">First Name</label>
                                <div class="col-sm-8">
                                <input type="text" className="form-control inputt" value={this.state.partner.FirstName|| ''} onChange={(e)=>this.setFnameState(e)}></input></div>
                         </div>

                         <div class="form-group row">
                                <label htmlFor="text" class="col-sm-4 col-form-label thandlabel">Last Name</label>
                                <div class="col-sm-8">
                                <input type="text" className="form-control inputt" value={this.state.partner.LastName|| ''} onChange={(e)=>this.setLnameState(e)}></input></div>
                         </div>

                         <div class="form-group row">
                                <label htmlFor="text" class="col-sm-4 col-form-label thandlabel">Email</label>
                                <div class="col-sm-8">
                                <input type="text" className="form-control inputt" value={this.state.partner.Email|| ''} onChange={(e)=>this.setEmailState(e)}></input></div>
                         </div>

                         <div class="form-group row">
                                <label htmlFor="password" class="col-sm-4 col-form-label thandlabel">Password</label>
                                <div class="col-sm-8">
                                <input type="password" className="form-control inputt" value={this.state.partner.Password|| ''} onChange={(e)=>this.setPasswordState(e)}></input></div>
                         </div>
                         <div class="form-group row">
                                <label htmlFor="password" class="col-sm-4 col-form-label thandlabel">Confirm Password</label>
                                <div class="col-sm-8">
                                <input type="password" className="form-control inputt" value={this.state.partner.CPassword|| ''} onChange={(e)=>this.setCPasswordState(e)}></input></div>
                         </div>

                         <div class="form-group row">
                            <label htmlFor="button" class="col-sm-4 col-form-label thandlabel"></label>
                             <div class="col-sm-8">
                             <input type="button" class="btn btn-success inputt form-control" value="Update" onClick={()=>this.customEdit()}></input>
                             </div>
                         </div>                              

                        </form>                      
                    }
                                </Modal.Body>

                        </Modal>
                      
                    </div>
                </div>

                </div>

            </>
        )
    }
}
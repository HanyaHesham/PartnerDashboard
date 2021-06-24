import React  from 'react';
import axios from 'axios';

export default class Profile extends React.Component{
    state={
        partner:{},
        PartnerId:1,
        FirstName:"",
        LastName:"",
        Username:"",
        Email:"",
        Password:"",
        CPassword:"",
        partnerInfo:[]
    }
    componentDidMount(){
        // this.getPartnerDetails();
    }

    // getPartnerDetails(){
    //     axios.get(`https://localhost:44327/api/partnerDetails/${this.state.partnerId}`).then(res=>{
    //         this.setState({partnerInfo:res.data})
    //         console.log(res.data);
    //     });
    // }

    setUsernameState=(e)=>{
        this.state.partner.Username=e.target.value
        this.setState({partner:this.state.partner});
    }

    setFnameState=(e)=>{
        this.state.partner.FirstName=e.target.value
        this.setState({partner:this.state.partner});
    }
    setLnameState=(e)=>{
        this.state.partner.LastName=e.target.value
        this.setState({partner:this.state.partner});
    }
    setEmailState=(e)=>{
        this.state.partner.Email=e.target.value
        this.setState({partner:this.state.partner});
    }
    setPasswordState=(e)=>{
        this.state.partner.Password=e.target.value
        this.setState({partner:this.state.partner});
    }
    setCPasswordState=(e)=>{
        this.state.partner.CPassword=e.target.value
        this.setState({partner:this.state.partner});
    }

    customEdit=()=>{
        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept':'*/*'
            }
          }

          const params=new URLSearchParams();
          params.append('PartnerId', this.state.partner.PartnerId)
          params.append('Username', this.state.partner.Username)
          params.append('FirstName', this.state.partner.FirstName)
          params.append('LastName', this.state.partner.LastName)
          params.append('Email', this.state.partner.Email)
          params.append('Password', this.state.partner.Password)
          params.append('CPassword', this.state.partner.CPassword)

          let URL=`https://localhost:44327/api/editPartner/${this.state.PartnerId}`

          axios.post(URL, params, config).then(res=>{
              console.log(res);             
          })
          .catch(console.error())
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
                         {                        
                        <form class="needs-validation" novalidate>
                                                      
                        <div class="form-group row">
                                <label htmlFor="text" class="col-sm-4 col-form-label thandlabel">Username</label>
                                <div class="col-sm-8">
                                <input type="text" className="form-control inputt"  value={this.state.partner.Username|| ''} onChange={(e)=>this.setUsernameState(e)}  disabled></input></div>
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
                       
                    </div>
                </div>

                </div>

            </>
        )
    }
}

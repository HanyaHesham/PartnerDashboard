import React from 'react';
import './Restaurant.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faUtensils,faHome,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';


class Tgrba extends React.Component {

    state = {
      RestaurantName:"",HotLine:"",Description:"",WebSite:"",StartWorkingHours:"",EndWorkingHours:"",Date:"",MaxDeliveryTime:"",AddressID:"",
      PartenerID:""
    }
    
    componentDidMount() {
        //this.setState({Rest:this.state.Rest})
    }

    handleRestaurantName=(e)=>{
      this.state.RestaurantName=e.target.value
     this.setState({
      RestaurantName:this.state.RestaurantName
     })
     console.log(this.state.RestaurantName)
 }

 handleHotLine=(e)=>{
  this.state.HotLine=e.target.value
 this.setState({
  HotLine:this.state.HotLine
 })
 console.log(this.state.HotLine)
}
handleDescription=(e)=>{
  this.state.Description=e.target.value
 this.setState({
  Description:this.state.Description
 })
 console.log(this.state.Description)
}

handleHotLine=(e)=>{
  this.state.HotLine=e.target.value
 this.setState({
  HotLine:this.state.HotLine
 })
 console.log(this.state.HotLine)
}

handleWebSite=(e)=>{
  this.state.WebSite=e.target.value
 this.setState({
  WebSite:this.state.WebSite
 })
 console.log(this.state.WebSite)
}

handleStartWorkingHours=(e)=>{
  this.state.StartWorkingHours=e.target.value
 this.setState({
  StartWorkingHours:this.state.StartWorkingHours
 })
 console.log(this.state.StartWorkingHours)
}

handleEndWorkingHours=(e)=>{
  this.state.EndWorkingHours=e.target.value
 this.setState({
  EndWorkingHours:this.state.EndWorkingHours
 })
 console.log(this.state.EndWorkingHours)
}

handleDate=(e)=>{
  this.state.Date=e.target.value
 this.setState({
  Date:this.state.Date
 })
 console.log(this.state.Date)
}

handleMaxDeliveryTime=(e)=>{
  this.state.MaxDeliveryTime=e.target.value
 this.setState({
  MaxDeliveryTime:this.state.MaxDeliveryTime
 })
 console.log(this.state.MaxDeliveryTime)
}
handleAddressID=(e)=>{
  this.state.AddressID=e.target.value
 this.setState({
  AddressID:this.state.AddressID
 })
 console.log(this.state.AddressID)
}


handleAddOrder=()=>{
      
       
  const config = {
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'Accept':'*/*',
      }
      
    }
    const paramss = new URLSearchParams()
    paramss.append( 'RestaurantName',this.state.RestaurantName)
    paramss.append('HotLine', this.state.HotLine)
    paramss.append( 'Description', this.state.Description)
    paramss.append( 'WebSite', this.state.WebSite)
    paramss.append('StartWorkingHours', this.state.StartWorkingHours)
    paramss.append('EndWorkingHours', this.state.EndWorkingHours)
    paramss.append('MaxDeliveryTime', this.state.MaxDeliveryTime)
    paramss.append('PartenerID', this.state.PartenerID)
    paramss.append('AddressID', this.state.AddressID)

    let URLL=`https://localhost:44327/api/Restaurants`
    axios.post(URLL,paramss,config).then(res=>{

        console.log(res)
        
    }).catch(error=>{
     console.log(error)
    })

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
            <div class="container shadow p-3 mb-5 bg-white rounded" >

                <h3>Talbat</h3>
                <hr></hr>
               
                <div class="row" >
                       
                     <div class="col col-md-12">
                         {
                           <>
                        <form class="needs-validation" novalidate>
                           
                        <div class="form-group row">
                       
                                <label for="validationCustom01" class="col-sm-4 col-form-label thandlabel">Restaurant Name</label>
                                <div class="col-sm-8">
                                <input type="text" class="form-control inputt" id="validationCustom01"style={{width:500}} value={this.state.RestaurantName} onChange={this.handleRestaurantName} required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a name.
                                    </div>
                               </div>
                               
                               <div class="form-group row">
                                
                                <label for="validationCustom011" class="col-sm-4 col-form-label thandlabel">Image</label>
                                <div class="col-sm-8">
                                <input type="file" class="form-control " id="validationCustom011"style={{width:500}}  ></input></div>
                                   
                               </div>
                                <div class="form-group row">
                                <label for="validationCustom02" class="col-sm-4 col-form-label thandlabel">Restaurant Description</label>
                                <div class="col-sm-8">
                                <input  type="textarea" name="text" class="form-control inputtt" id="validationCustom02" value={this.state.Description} onChange={this.handleDescription} style={{width:500}}  required/></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Description.
                                    </div>
                         </div>
                         <div class="form-group row">
                         <label for="validationCustom03" class="col-sm-4 col-form-label thandlabel">HotLine</label>
                                <div class="col-sm-8">
                                <input  type="number" class="form-control" id="validationCustom03" style={{width:500}} value={this.state.HotLine} onChange={this.handleHotLine} required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Description.
                                    </div>
                         </div>
                         <div class="form-group row">
                         <label for="validationCustom04" class="col-sm-4 col-form-label thandlabel">Website</label>
                                <div class="col-sm-8">
                                <input  type="text" class="form-control" id="validationCustom04" value={this.state.WebSite} onChange={this.handleWebSite} style={{width:500}}  required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a website.
                                    </div>
                         </div>

                         <div class="form-group row">
                         <label for="validationCustom05" class="col-sm-4 col-form-label thandlabel">Starting Work</label>
                                <div class="col-sm-2">
                                <input  type="number" class="form-control" id="validationCustom05" value={this.state.StartWorkingHours} onChange={this.StartWorkingHours} style={{width:200}}  required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Starting Work.
                                    </div>
                                    <label for="validationCustom06" class="col-sm-2 col-form-label thandlabel">Ending Work</label>
                                <div class="col-sm-4">
                                <input  type="number" class="form-control" id="validationCustom06" value={this.state.EndWorkingHours} onChange={this.EndWorkingHours} style={{width:200}}  required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Ending Work.
                                    </div>
                         </div>
                         <div class="form-group row">
                         <label for="validationCustom07" class="col-sm-4 col-form-label thandlabel">Date</label>
                                <div class="col-sm-8">
                                <input  type="date" class="form-control" id="validationCustom07" value={this.state.Date} onChange={this.handleDate} style={{width:500}}  required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Date.
                                    </div>
                         </div>
                         <div class="form-group row">
                         <label for="validationCustom08" class="col-sm-4 col-form-label thandlabel">Max Delivery</label>
                                <div class="col-sm-8">
                                <input  type="number" class="form-control" id="validationCustom08" value={this.state.MaxDeliveryTime} onChange={this.handleMaxDeliveryTime} style={{width:500}}  required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Max Delivery.
                                    </div>
                         </div>
                         <div class="form-group row">
                         <label for="validationCustom09" class="col-sm-4 col-form-label thandlabel">Address Id</label>
                                <div class="col-sm-8">
                                <input  type="number" class="form-control" id="validationCustom09" value={this.state.AddressID} onChange={this.handleAddressID} style={{width:500}}  required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Max Delivery.
                                    </div>
                         </div>
                         
                        </form>
                         <input type="button"  class="btn btn-success inputtbtn" value="Save"></input>
                        </>
                    }
                       

                        
                    </div>
                </div>
            </div>
               </>
        )
    }

}

export default Tgrba;
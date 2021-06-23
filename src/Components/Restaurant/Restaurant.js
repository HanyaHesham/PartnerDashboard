import React from 'react';
import './Restaurant.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faUtensils,faHome,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from './1.jpg'
import axios from 'axios';


class Restaurant extends React.Component {

    state = {
      RestaurantName:"",HotLine:"",Description:"",WebSite:"",StartWorkingHours:0,EndWorkingHours:0,Date:"",MaxDeliveryTime:0,AddressID:1,
      PartenerID:1,
      fd:new FormData() 
    }
    
    componentDidMount() {
        //this.setState({Rest:this.state.Rest})

    }


    change=()=>{
      var file = document.getElementById("fileI").files[0]; 
      var reader=new FileReader();
      this.state.fd.append('file',file,file.name);
      reader.readAsDataURL(file);
      reader.onload=readerEvent=>{
      var content = readerEvent.target.result;
      document.getElementById("t").src = content;
}
   
 }

 saveImage=()=>{

  axios.post("https://localhost:44327/api/imagestore",this.state.fd).then(
    (res)=>{
      console.log(res.data)
    }
  )
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



handleAddrestaurant=()=>{
      
       
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
    paramss.append('Date', this.state.Date)
    paramss.append('MaxDeliveryTime', this.state.MaxDeliveryTime)
    paramss.append('PartenerID', this.state.PartenerID)
    paramss.append('AddressID', this.state.AddressID)
    console.log(paramss)
    let URLL=`https://localhost:44327/api/Restdashborad`
    axios.post(URLL,paramss,config).then(res=>{
           console.log(paramss)
        console.log(res)
        
    }).catch(error=>{
     console.log(error)
    })

  }


    render() {
       
        return ( 
               <>
            <div class="container shadow p-3 mb-5 bg-white rounded" style={{marginRight:100}}>
                <h3>FoodAway</h3>
                <hr></hr>               
                <div class="row" >                       
                     <div class="col col-md-12">
                         {
                           <>
                        <form class="needs-validation" novalidate>
                        <div class="form-group row">                               
                                <label for="validationCustom011" class="col-sm-4 col-form-label thandlabel">Image</label>
                                <div class="col-sm-8">
                                <input id='fileI' type="file" name="file"  style={{display: 'none'}} onChange={()=>this.change()}/>
      <img id="t" src={logo} onClick={()=>{
        document.getElementById("fileI").click();

      }}    height="100" width="100"/>
                                </div>                                 
                               </div>
                           
                        <div class="form-group row">                      
                                <label for="validationCustom01" class="col-sm-4 col-form-label thandlabel">Restaurant Name</label>
                                <div class="col-sm-8">
                                <input type="text" class="form-control inputt" id="validationCustom01" value={this.state.RestaurantName} onChange={this.handleRestaurantName} required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a name.
                                    </div>
                               </div>                            
                               
                               
                                <div class="form-group row">
                                <label for="validationCustom02" class="col-sm-4 col-form-label thandlabel">Restaurant Description</label>
                                <div class="col-sm-8">
                                <textarea name="text" class="form-control inputtt" id="validationCustom02" value={this.state.Description} onChange={this.handleDescription}   required></textarea></div>
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
                                <input  type="number" class="form-control" id="validationCustom03"  value={this.state.HotLine} onChange={this.handleHotLine} required></input></div>
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
                                <input  type="text" class="form-control" id="validationCustom04" value={this.state.WebSite} onChange={this.handleWebSite}   required></input></div>
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
                                <input  type="number" class="form-control" id="validationCustom05" value={this.state.StartWorkingHours} onChange={this.handleStartWorkingHours} style={{width:200}}  required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Starting Work.
                                    </div>
                                    <label for="validationCustom06" class="col-sm-2 col-form-label thandlabel">Ending Work</label>
                                <div class="col-sm-4">
                                <input  type="number" class="form-control" id="validationCustom06" value={this.state.EndWorkingHours} onChange={this.handleEndWorkingHours} style={{width:200}}  required></input></div>
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
                                <input  type="date" class="form-control" id="validationCustom07" value={this.state.Date} onChange={this.handleDate}   required></input></div>
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
                                <input  type="number" class="form-control" id="validationCustom08" value={this.state.MaxDeliveryTime} onChange={this.handleMaxDeliveryTime}   required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Max Delivery.
                                    </div>
                         </div>
                         

                         <div class="form-group row justify-content-center">
                             <div class="col-sm-8 ">
                             <input type="button" class="btn btn-success inputtbtn" onClick={ this.handleAddrestaurant}  value="Save"></input>
                             </div>
                         </div>
                        </form>
                        
                         
                        </>
                    }

                    </div>
                </div>
            </div>
               </>
        )
    }

}

export default Restaurant;
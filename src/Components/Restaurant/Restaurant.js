import React from 'react';
import './Restaurant.css';
import logo from '../../images/add-image.jpg'
import axios from 'axios';
import swal from 'sweetalert';

class Restaurant extends React.Component {

    state = {
      RestaurantName:"",HotLine:"",Description:"",WebSite:"",StartWorkingHours:0,EndWorkingHours:0,Date:"",MaxDeliveryTime:0,AddressID:"",
      PartenerId:JSON.parse(localStorage.getItem('Partner')).PartenerId,
      fd:new FormData(),ResturantDetails:{},image:"",RestId:""
    }
    
    componentDidMount() {
      axios.get(`https://localhost:44327/api/RestDetails/${this.state.PartenerId}`).then(
        (res)=>{
          this.setState({
            ResturantDetails:res.data,
            RestaurantName:res.data.RestaurantName,
            Description:res.data.Description,
            WebSite:res.data.WebSite,
            HotLine:res.data.HotLine,
            StartWorkingHours:res.data.StartWorkingHours,
            EndWorkingHours:res.data.EndWorkingHours,
            image:res.data.Image,
            RestId:res.data.RestaurantId,
            AddressID:res.data.AddressID
          })
          localStorage.setItem('Resturant',res.data.RestaurantId)
          console.log(res.data)
        }
      )
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
EditResturant=()=>{
  this.state.fd.append('person',JSON.stringify(
    {
    RestaurantName:this.state.RestaurantName,
    HotLine:this.state.HotLine,
    Description:this.state.Description,
    WebSite:this.state.WebSite,
    StartWorkingHours:this.state.StartWorkingHours,
    EndWorkingHours:this.state.EndWorkingHours,
    Date:this.state.Date,
    MaxDeliveryTime:this.state.MaxDeliveryTime,
    PartenerID:this.state.PartenerID,
    AddressID:this.state.AddressID
    }
      )
    
    );
  axios.post(`https://localhost:44327/api/EditResturant/${this.state.RestId}`,this.state.fd).then(
    (res)=>{
      this.state.imgFlage=res.data
      this.setState({
        imgFlage:this.state.imgFlage
      })
      this.state.fd=new FormData()
      this.setState({
        fd:this.state.fd
      })
    }
   
  )
  swal("Edited", "", "success")
}

// saveImage=()=>{
  
//   this.state.fd.append('person',JSON.stringify(
//     {
//     RestaurantName:this.state.RestaurantName,
//     HotLine:this.state.HotLine,
//     Description:this.state.Description,
//     WebSite:this.state.WebSite,
//     StartWorkingHours:this.state.StartWorkingHours,
//     EndWorkingHours:this.state.EndWorkingHours,
//     Date:this.state.Date,
//     MaxDeliveryTime:this.state.MaxDeliveryTime,
//     PartenerID:this.state.PartenerID,
//     AddressID:this.state.AddressID
//     }
//       )
    
//     );
//   axios.post("https://localhost:44327/api/Image/select",this.state.fd).then(
//     (res)=>{
//       this.state.imgFlage=res.data
//       this.setState({
//         imgFlage:this.state.imgFlage
//       })
//       this.state.fd=new FormData()
//       this.setState({
//         fd:this.state.fd
//       })
//     }
//   )
// }


// handleAddrestaurant=()=>{
      
       
//   const config = {
//       headers: {
//         'Content-Type':'application/x-www-form-urlencoded',
//         'Accept':'*/*',
//       }
      
//     }
//     const paramss = new URLSearchParams()
    
//     // this.state.fd.append( 'RestaurantName',this.state.RestaurantName)
//     // paramss.append('HotLine', this.state.HotLine)
//     // paramss.append( 'Description', this.state.Description)
//     // paramss.append( 'WebSite', this.state.WebSite)
//     // paramss.append('StartWorkingHours', this.state.StartWorkingHours)
//     // paramss.append('EndWorkingHours', this.state.EndWorkingHours)
//     // paramss.append('Date', this.state.Date)
//     // paramss.append('MaxDeliveryTime', this.state.MaxDeliveryTime)
//     // paramss.append('PartenerID', this.state.PartenerID)
//     // paramss.append('AddressID', this.state.AddressID)
    
//     this.state.fd.append( 'RestaurantName',this.state.RestaurantName)
//     this.state.fd.append('HotLine', this.state.HotLine)
//     this.state.fd.append( 'Description', this.state.Description)
//     this.state.fd.append( 'WebSite', this.state.WebSite)
//     this.state.fd.append('StartWorkingHours', this.state.StartWorkingHours)
//     this.state.fd.append('EndWorkingHours', this.state.EndWorkingHours)
//     this.state.fd.append('Date', this.state.Date)
//     this.state.fd.append('MaxDeliveryTime', this.state.MaxDeliveryTime)
//     this.state.fd.append('PartenerID', this.state.PartenerID)
//     this.state.fd.append('AddressID', this.state.AddressID)
//     console.log(paramss)
//     let URLL=`https://localhost:44327/api/Restdashborad`
//     axios.post(URLL,paramss,config).then(res=>{
//            console.log(paramss)
//         console.log(res)
        
//     }).catch(error=>{
//      console.log(error)
//     })

//   }


    render() {
       
        return ( 
               <>
             
            <div class="container shadow p-3 mb-5 bg-white rounded" style={{marginTop:50}}>
                <h2 style={{color:"brown", textAlign:'center'}}>Your Restaurant Details</h2>
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
                                <img id="t" style={{cursor:'pointer'}} src={logo} onClick={()=>{
                                  document.getElementById("fileI").click();

                                }} height="100" width="100"/>
                                {/* <img src={this.state.image}></img> */}
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
                         
                         <div class="form-group row">
                            <label htmlFor="button" class="col-sm-4 col-form-label thandlabel"></label>
                             <div class="col-sm-8">
                             <input type="button" class="btn btn-success inputt form-control" onClick={ this.EditResturant}  value="Update"></input>
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
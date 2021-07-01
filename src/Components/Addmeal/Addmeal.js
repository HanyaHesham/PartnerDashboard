import React from 'react';
import './Addmeal.css';
import axios from 'axios';
import logo from '../../images/add-image.jpg';
import swal from 'sweetalert';

export default class AddMeal extends React.Component{
    state={
        Mealname:"",MealDescription:"",MealPrice:0,Discount:0,CategoryId:this.props.location.selectedCategory,imgFlage:"s", fd:new FormData() 
    }

    componentDidMount() {
        //this.setState({Rest:this.state.Rest})
    }

    handleMealname=(e)=>{
        this.state.Mealname=e.target.value
       this.setState({
        Mealname:this.state.Mealname
       })
       console.log(this.state.Mealname)
   }
  
   handleMealDescription=(e)=>{
    this.state.MealDescription=e.target.value
   this.setState({
    MealDescription:this.state.MealDescription
   })
   console.log(this.state.MealDescription)
  }
  handleMealPrice=(e)=>{
    this.state.MealPrice=e.target.value
   this.setState({
    MealPrice:this.state.MealPrice
   })
   console.log(this.state.MealPrice)
  }
  
  handleDiscount=(e)=>{
    this.state.Discount=e.target.value
   this.setState({
    Discount:this.state.Discount
   })
   console.log(this.state.Discount)
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
  
    this.state.fd.append('mealimg',JSON.stringify(
      {
        Mealname:this.state.Mealname,
        MealDescription:this.state.MealDescription,
        MealPrice:this.state.MealPrice,
        Discount:this.state.Discount,
        CategoryId: this.state.CategoryId
      }
        )
      
      );
    axios.post("https://localhost:44327/api/Image/selectmeal",this.state.fd).then(
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
    swal("Saved", "", "success")
    this.props.history.push('/HanyaHesham/PartnerDashboard/Menu')
  }


  handleAddmeal=()=>{
      
    const config = {
        headers: {
          'Content-Type':'application/x-www-form-urlencoded',
          'Accept':'/',
        }
        
      }
      const paramss = new URLSearchParams()
      paramss.append( 'Mealname',this.state.Mealname)
      paramss.append('MealDescription', this.state.MealDescription)
      paramss.append( 'MealPrice', this.state.MealPrice)
      paramss.append( 'Discount', this.state.Discount)
      paramss.append('CategoryId', this.state.CategoryId)
     
     
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
               
            <div class="container shadow p-3 mb-5 bg-white rounded" style={{marginTop:50}}>

                <h2 style={{color:"brown", textAlign:'center'}}>Add Meal</h2>
                <hr></hr>
               
                <div class="row" >
                       
                     <div class="col col-md-12">
                         {                        
                        <form class="needs-validation" novalidate>
                            <div class="form-group row">
                                
                                <label for="validationCustom011" class="col-sm-4 col-form-label thandlabel">Image</label>
                                <div class="col-sm-8">
                                <input id='fileI' type="file" name="file"  style={{display: 'none'}} onChange={()=>this.change()}/>
                                <img id="t" style={{cursor:'pointer'}} src={logo} onClick={()=>{
                                  document.getElementById("fileI").click();

                                }} height="100" width="100"/>
                                </div>                              
                            </div>
                                                      
                        <div class="form-group row">                    
                                <label for="validationCustom01" class="col-sm-4 col-form-label thandlabel">Meal Name</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control inputt" id="validationCustom01" value={this.state.Mealname} onChange={this.handleMealname}  required></input>
                                </div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a name.
                                    </div>
                               </div>
                               
                            <div class="form-group row">
                                <label for="validationCustom02" class="col-sm-4 col-form-label thandlabel">Meal Description</label>
                                <div class="col-sm-8">
                                    <textarea name="text" class="form-control inputtt" id="validationCustom02" value={this.state.MealDescription} onChange={this.handleMealDescription}  required></textarea>
                                </div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Description.
                                    </div>
                            </div>
                         <div class="form-group row">
                         <label for="validationCustom03" class="col-sm-4 col-form-label thandlabel">Meal Price</label>
                                <div class="col-sm-8">
                                    <input type="number" class="form-control" id="validationCustom03"  value={this.state.MealPrice} onChange={this.handleMealPrice} required></input>
                                </div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Description.
                                    </div>
                         </div>
                        

                         <div class="form-group row">
                         <label for="validationCustom05" class="col-sm-4 col-form-label thandlabel">Discount</label>
                                <div class="col-sm-8">
                                    <input type="number" class="form-control" id="validationCustom05"  value={this.state.Discount} onChange={this.handleDiscount} required></input>
                                </div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Starting Work.
                                    </div>                                  
                         </div>
                        
                        
                         
                         <div class="form-group row">
                            <label htmlFor="button" class="col-sm-4 col-form-label thandlabel"></label>
                             <div class="col-sm-8">
                             <input type="button" class="btn btn-success inputt form-control"  onClick={ this.saveImage}   value="Save"></input>
                             </div>
                         </div>

                        </form>                      
                    }
                       
                    </div>
                </div>
            </div>
               
        )
    }


}

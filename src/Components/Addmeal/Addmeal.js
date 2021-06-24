import React from 'react';
import './Addmeal.css';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSmile, faAngleDown, faAngleUp, faPlus, faMinus, faUtensils,faHome ,facutlery} from "@fortawesome/free-solid-svg-icons";

export default class AddMeal extends React.Component{
    state={

    }

    componentDidMount() {
        //this.setState({Rest:this.state.Rest})
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
                                    <input type="file" id="validationCustom011"></input>
                                </div>                              
                            </div>
                                                      
                        <div class="form-group row">                    
                                <label for="validationCustom01" class="col-sm-4 col-form-label thandlabel">Meal Name</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control inputt" id="validationCustom01"  required></input>
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
                                    <textarea name="text" class="form-control inputtt" id="validationCustom02" required></textarea>
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
                                    <input type="number" class="form-control" id="validationCustom03"  required></input>
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
                                    <input type="number" class="form-control" id="validationCustom05" required></input>
                                </div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Starting Work.
                                    </div>                                  
                         </div>
                        
                         <div class="form-group row">
                         <label for="validationCustom08" class="col-sm-4 col-form-label thandlabel">Category id</label>
                                <div class="col-sm-8">
                                    <input  type="number" class="form-control" id="validationCustom08" required></input>
                                </div>
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
                             <input type="button" class="btn btn-success inputt form-control"  value="Save"></input>
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

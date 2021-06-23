import React from 'react';
import './Menu.css';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import swal from 'sweetalert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash,faPlus } from "@fortawesome/free-solid-svg-icons";

export default class Menu extends React.Component{
    state={
        show:false,Category:[],CategoryName:"",Meals:[]
    }
    handleClose = () =>{
        this.setState({
          show:false
        })
      };
      handleshoww= () =>{
       this.setState({
         show:true
       })
     };
     
     handlecategory=(e)=>{
        this.state.CategoryName=e.target.value
       this.setState({
        CategoryName:this.state.CategoryName
       })
       console.log(this.state.CategoryName)
   }
     AddCategoryHandler=()=>{
        const config = {
            headers: {
              'Content-Type':'application/x-www-form-urlencoded',
              'Accept':'*/*',
            }
          }
          const params = new URLSearchParams()
          params.append('Name',this.state.CategoryName)
          params.append('MenuID', 1)
          let URL=`https://localhost:44327/api/Categories?RestId=${1}`
          axios.post(URL,params,config).then(res=>{
            this.setState({Category:res.data})
            }).catch(error=>{
                console.log(error)
                })  
     }
     componentDidMount(){
         console.log(this.state.Category)
         axios.get(`https://localhost:44327/api/Category/All?id=1`).then(x=>{
            this.setState({Category:x.data})})
     }
     handlemeals=(id)=>{
        axios.get(`https://localhost:44327/api/Meal/All?id=${id}`).then(x=>{
            this.setState({Meals:x.data})})
     }
     DeleteCategory=(id)=>{

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Category!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const config = {
                    headers: {
                      'Content-Type':'application/x-www-form-urlencoded',
                      'Accept':'*/*',
                    }
                  }
                  
                  const paramss = new URLSearchParams()
                  let URLL=`https://localhost:44327/api/DeleteCategory?id=${id}`
                 axios.post(URLL,paramss,config)
              swal("Poof! The category has been deleted!", {
                icon: "success",
              });
            } else {
              swal("The category file is safe!");
            }
          });     
     }

     DeleteMealHandler=(id)=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Meal!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const config = {
                    headers: {
                      'Content-Type':'application/x-www-form-urlencoded',
                      'Accept':'*/*',
                    }
                  }
                  
                  const paramss = new URLSearchParams()
                  let URLL=`https://localhost:44327/api/DeleteMeal?id=${id}`
                 axios.post(URLL,paramss,config)
              swal("Poof! The Meal has been deleted!", {
                icon: "success",
              });
            } else {
              swal("The Meal file is safe!");
            }
          });     

     }
    render(){
        return(
            <div className="container shadow" id="catcont">
            <div class="row">
                <div className="col-4 categories" >
                    <div className="row">
                    <h3 className="col-7">Categories</h3>
                    <button className="btn col-3 " id="AddCatbtn" onClick={this.handleshoww} style={{fontWeight:"bold"}}>Add <FontAwesomeIcon  icon={faPlus} /></button>
                            <Modal show={this.state.show} onHide={this.handleClose} >
                                <Modal.Body> 
                                <button className="close" onClick={this.handleClose} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                    <br></br>
                                <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                            <label for="Categoryinput">Category name</label>
                                            <input type="Text" class="form-control" id="Categoryinput" placeholder="Ex-Salads" onChange={this.handlecategory}  />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div class="form-row">
                                        <button className="btn btn-success form-control" onClick={this.AddCategoryHandler} >Save</button>
                                        </div>
                                </form>
                                </Modal.Body>
                          
                            </Modal>
                    </div>
                    <br></br>
                    <ul>
                        {   this.state.Category.map((cat,i)=>{
                                 return(     
                                    <div  className="row">
                                            <li  className="col-8" style={{cursor:"pointer"}} onClick={()=>this.handlemeals(cat.CategoryId)}>{cat.Name}  </li>
                                            <button className="close col-3" aria-label="Close"  onClick={()=>this.DeleteCategory(cat.CategoryId)}>
                                            <FontAwesomeIcon  icon={faTrash} style={{color:"red"}} />
                                            </button>
                                    </div>   
                                    )
                            })
                        }
                    </ul>
                </div>
               
                <div className="col-8 meals">
                    <div>
                        <div></div>
                        <button className="btn" id="addmealbtn"  >Add new Meal <FontAwesomeIcon  icon={faPlus} /></button>
                      
                    </div>
                    <br></br><br></br>
                    {   this.state.Meals.map((Meal,i)=>{
                                 return(     
                        <div class="row">
                                <div class="col-lg-2 col-md-3 col-sm-5">
                                    <img class="card shadow-sm p-2 mb-2 bg-white rounded" height="60" width="60" src="images/food.jpg" />
                                </div>
                                <div class="col-lg-6 col-md-9 col-sm-7" style={{marginbottom:10}}>
                                    <span class="h5">{Meal.Mealname}</span><br />
                                    <span class="h6" style={{color: '#aaa'}}>{Meal.MealDescription}</span><br />
                                    <i class="fa fa-smile-o" aria-hidden="true" style={{fontsize:23,color:'orange'}}></i>
                                    <span class="h6"style={{color: '#aaa'}}>{Meal.MealPrice} LE</span><br />
                                </div>
                                <div class="col-lg-4">
                                <button className="btn " onClick={()=>this.DeleteMealHandler(Meal.MealId)}><FontAwesomeIcon  icon={faTrash} style={{color:"red"}} /></button> &nbsp;<button className="btn "><FontAwesomeIcon  icon={faEdit} style={{color:"black"}}  /></button>
                                </div>


                            </div>
                                   )
                                })
                            }
                  
                </div>
                

            </div>
            </div>
        )
    }
}
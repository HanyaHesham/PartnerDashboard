import React from 'react';
import './Menu.css';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import swal from 'sweetalert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash,faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default class Menu extends React.Component{
    state={
        show:false,Category:[],CategoryName:"",Meals:[],Categoryid:"",CusineName:"",
        showmodal:false,Cusine:[],showMealmodal:false,MealName:"",Price:0,Discount:0,RestId:localStorage.getItem('Resturant'),
        showMenuModal:false,MenuName:"",Menu:[]
    }
    componentDidMount(){
      console.log(this.state.Category)
   
      axios.get(`https://localhost:44327/api/cusine/${this.state.RestId}`).then(x=>{
           this.setState({Cusine:x.data})})
      axios.get(`https://localhost:44327/api/Menus/${this.state.RestId}`).then(x=>{
            this.setState({Menu:x.data})})
              

  }
  showCategories=()=>{
    axios.get(`https://localhost:44327/api/Categories?id=${this.state.RestId}`).then(x=>{
      this.setState({Category:x.data})})
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
     handleshow=()=>{
      this.setState({
        showmodal:true
      })
     }
     handleClosemodal=()=>{
      this.setState({
        showmodal:false
      })
     }
     handleShowMeal=()=>{
      this.setState({
        showMealmodal:true
      })
     }
     handleCloseMealmodal=()=>{
      this.setState({
        showMealmodal:false
      })
     }
     
     handlecategory=(e)=>{
        this.state.CategoryName=e.target.value
       this.setState({
        CategoryName:this.state.CategoryName
       })
       console.log(this.state.CategoryName)
   }

    handlecusine=(e)=>{
      this.state.CusineName=e.target.value
    this.setState({
      CusineName:this.state.CusineName
    })
    console.log(this.state.CusineName)
  }
  HandleMealName=(e)=>{
    this.state.MealName=e.target.value
    this.setState({
      MealName:this.state.MealName
    })
    console.log(this.state.MealName)

  }
  HandlePrice=(e)=>{
    this.state.Price=e.target.value
    this.setState({
      Price:this.state.Price
    })
    console.log(this.state.Price)
  }
  HandleDiscount=(e)=>{
    this.state.Discount=e.target.value
    this.setState({
      Discount:this.state.Discount
    })
    console.log(this.state.Discount)
  }


      EditMeal=(i)=>{
        const config = {
          headers: {
            'Content-Type':'application/x-www-form-urlencoded',
            'Accept':'*/*',
          }
        }
        const params = new URLSearchParams()
        let URL=`https://localhost:44327/api/EditMeal?id=${i}&name=${this.state.MealName}&price=${this.state.Price}&discount=${this.state.Discount}`
        axios.post(URL,params,config).then(res=>{
          // this.setState({Category:res.data})
          }).catch(error=>{
              console.log(error)
              })  

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
          let URL=`https://localhost:44327/api/Categories?RestId=${this.state.RestId}`
          axios.post(URL,params,config).then(res=>{
            this.setState({Category:res.data})
            }).catch(error=>{
                console.log(error)
                })  
     }
     
     handlemeals=(id)=>{
       
        axios.get(`https://localhost:44327/api/Meal/All?id=${id}`).then(x=>{
            this.setState({Meals:x.data,Categoryid:id})})
     }
     handleGetCusines=(id)=>{
      axios.get(`https://localhost:44327/api/cusine/${id}`).then(x=>{
        this.setState({Cusine:x.data})})
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
     addcusine=()=>{
      const config = {
        headers: {
          'Content-Type':'application/x-www-form-urlencoded',
          'Accept':'*/*',
        }
      }
      const paramss = new URLSearchParams()
      paramss.append('cusineName',this.state.CusineName)
      // paramss.append('Restaurant_RestaurantId', 1)
      let URLL=`https://localhost:44327/api/Cusine?cusineName=${this.state.CusineName}&RestId=${this.state.RestId}`
      axios.post(URLL,paramss,config).then(res=>{
        this.setState({Cusine:res.data})
        }).catch(error=>{
            console.log(error)
            })  
     }
     HandleMenuName=(e)=>{
      this.state.MenuName=e.target.value
      this.setState({
        MenuName:this.state.MenuName
      })
      console.log(this.state.MenuName)
    }

     AddMenu=()=>{
      const config = {
        headers: {
          'Content-Type':'application/x-www-form-urlencoded',
          'Accept':'*/*',
        }
      }
      const paramss = new URLSearchParams()
      paramss.append('MenuName',this.state.MenuName)
      paramss.append('RestaurantID',this.state.RestId)
      let URLL=`https://localhost:44327/api/AddMenu`
      axios.post(URLL,paramss,config).then(res=>{
        this.setState({Menu:res.data})
        }).catch(error=>{
            console.log(error)
            })     
     }
     handleOpenModal=()=>{
      this.setState({
        showMenuModal:true
      })
     }
     CloseMenumodal=()=>{
      this.setState({
        showMenuModal:false
      })
     }
     

    render(){
      if(this.state.Menu.length!=0){
        return(
         
            <div className="container shadow bg-white rounded" id="catcont" style={{marginTop:50}}>
               <h2 style={{color:"brown"}}>My Menu Items </h2>
           
              <hr/>
              <div className="container row ">
             
                <div className="col-4 categories" >
                    <div className="row">
                    <h3 className="col-8" onClick={this.showCategories} style={{cursor:"pointer"}}>Categories</h3>
                    <button className="btn col-4" id="AddCatbtn" onClick={this.handleshoww} style={{fontWeight:"bold"}}>Add<FontAwesomeIcon  icon={faPlus} /></button>
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
                                            <button className="col-3 bg-transparent"   style={{cursor:"pointer",border:"none"}} onClick={()=>this.DeleteCategory(cat.CategoryId)}>
                                            <FontAwesomeIcon  icon={faTrash} style={{color:"red"}} />
                                            </button>
                                    </div>   
                                    )
                            })
                        }
                    </ul>
                </div>
               {/* ------------------------------------------------Meals-----------------------------------------------*/}
                <div className="col-7 meals">
                    <div>
                        <div></div>
                        <Link  to={{pathname:`/HanyaHesham/PartnerDashboard/AddMeal/${this.state.Categoryid}` ,selectedCategory:this.state.Categoryid}} className="btn" id="addmealbtn"  >Add Meal <FontAwesomeIcon  icon={faPlus} /></Link>
                      
                    </div>
                    <br></br><br></br>
                    {   this.state.Meals.map((Meal,i)=>{
                                 return(     
                        <div class="row">
                                <div class="col-lg-2 col-md-3 col-sm-5">
                                    <img class="card shadow-sm p-2 mb-2 bg-white rounded" height="60" width="60" src={Meal.Image} />
                                </div>
                                <div class="col-lg-6 col-md-9 col-sm-7" style={{marginbottom:10}}>
                                    <span class="h5">{Meal.Mealname}</span><br />
                                    <span class="h6" style={{color: '#aaa'}}>{Meal.MealDescription}</span><br />
                                    <i class="fa fa-smile-o" aria-hidden="true" style={{fontsize:23,color:'orange'}}></i>
                                    <span class="h6"style={{color: '#aaa'}}>{Meal.MealPrice} LE</span><br />
                                </div>
                                <div class="col-lg-4">
                                <button className="btn " onClick={()=>this.DeleteMealHandler(Meal.MealId)}>
                                  <FontAwesomeIcon  icon={faTrash} style={{color:"red"}} /></button> &nbsp;<button className="btn ">
                                  <FontAwesomeIcon  icon={faEdit} style={{color:"black"}} onClick={this.handleShowMeal} /></button>
                                            <Modal show={this.state.showMealmodal} onHide={this.handleCloseMealmodal} >
                                              <Modal.Body> 
                                              <button className="close" onClick={this.handleCloseMealmodal} aria-label="Close">
                                                  <span aria-hidden="true">&times;</span>
                                                  </button>
                                                  <br></br>
                                              <form>
                                                      <div class="form-row">
                                                          <div class="form-group col-md-12">
                                                          <label for="Mealname">Meal name</label>
                                                          <input type="Text" class="form-control" id="Mealname" placeholder="Ex-S" onChange={this.HandleMealName}  />
                                                          <label for="Price">Meal price</label>
                                                          <input type="number" class="form-control" id="Price" placeholder="0" onChange={this.HandlePrice}  />
                                                          <label for="Discount">Discount</label>
                                                          <input type="number" class="form-control" id="Discount" placeholder="0" onChange={this.HandleDiscount}  />
                                                          </div>
                                                      </div>
                                                      <br></br>
                                                      <div class="form-row">
                                                      <button className="btn btn-success form-control"  onClick={()=>this.EditMeal(Meal.MealId)}>Save</button>
                                                      </div>
                                              </form>
                                              </Modal.Body>
                          
                                       </Modal>

                                </div>


                            </div>
                                   )
                                })
                            }
                  
                </div>
                </div>
                {/* -----------------------------------Cuisines-------------------------------------------------------------- */}
                <div className="row ml-4" >
                  <div className="col-3">
                <h3 >Cuisines</h3>
                <ul>
                            {   this.state.Cusine.map((cat,i)=>{
                       
                       return(    
                       
                                
                                  <li   style={{cursor:"pointer"}} onClick={()=>this.handlemeals(cat.CategoryId)}>{cat.Cuisine.CuisineName}  </li>
                                 
                             
                          
                          )
                  })
              }
               </ul>
               </div>
            
               <div  className="col-3" >
               <button id="cusinbtn" className="btn" onClick={this.handleshow} style={{fontWeight:"bold"}}> Add Cuisine <FontAwesomeIcon  icon={faPlus} /></button>
               </div>
               <Modal show={this.state.showmodal} onHide={this.handleClosemodal} >
                                <Modal.Body> 
                                <button className="close" onClick={this.handleClosemodal} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                    <br></br>
                                <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                            <label for="Cusineinput">Cuisine name</label>
                                            <input type="Text" class="form-control" id="Cusineinput" placeholder="Ex-Salads" onChange={this.handlecusine}  />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div class="form-row">
                                        <button className="btn btn-success form-control" onClick={this.addcusine} >Save</button>
                                        </div>
                                </form>
                                </Modal.Body>
                          
                            </Modal>
            </div>
           
        </div>
          
        )
            }
            else{
              return(
                <div className="container shadow bg-white rounded " id="catcont" style={{marginTop:50}}>
                <div className="row  rounded justify-content-center">
                <h3>No Items yet</h3>
                <svg xmlns="http://www.w3.org/2000/svg" id="svgProp" width="100" height="70" fill="#CDC6BF" class="bi bi-lock" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
                </div>
                <div class="btnItems ">
                <button className="btn btn-success mt-3 offset-3" style={{width:"40%"}} onClick={this.handleOpenModal}>Add Menu</button>
                <Modal show={this.state.showMenuModal} onHide={this.CloseMenumodal} >
                                <Modal.Body> 
                                <button className="close" onClick={this.CloseMenumodal} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                    <br></br>
                              
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                            <label for="Menuinput">Menu Name</label>
                                            <input type="Text" class="form-control" id="Menuinput" placeholder="Ex-Bremer" onChange={this.HandleMenuName}/>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div class="form-row">
                                        <button className="btn btn-success form-control" onClick={this.AddMenu} >Add Menu</button>
                                        </div>
                              
                                </Modal.Body>
                          
                            </Modal>
                </div>
                </div>
              )
            }
    }
}
import React from 'react';
import axios from 'axios';
import './Order.css';


export default class Order extends React.Component{
    state={
        RestId:1,
        RestOrders:[],
        RestMealOrders:[]
    }
    
    componentDidMount(){
        this.GetRestOrders();
        this.GetRestMealOrders();
    }

    GetRestOrders(){
        axios.get(`https://localhost:44327/api/RestOrders/${this.state.RestId}`).then(res=>{
            this.setState({RestOrders:res.data})
            console.log(res.data);
        });
    }

    GetRestMealOrders(){
        axios.get(`https://localhost:44327/api/RestMealOrders/${this.state.RestId}`).then(res=>{
            this.setState({RestMealOrders:res.data})
            console.log(res.data);
        });
    }

    render(){
        return(
            <>
            <div className="container shadow p-3 mb-5 bg-white rounded MyContainer" style={{marginTop:50}}>
            <h2 style={{color:"brown", textAlign:'center'}}>Orders Done Successfully From Your Restaurant</h2>
                <hr></hr>

                <div className="Row col col-md-12">
                    <div className="col col-md-12">
                        <div className="col col-md-6 floatLeft">
                        <table className="table table-hover">
                        <thead className="thead-light">
                                      <tr>
                                        <th scope="col">Order Time</th>
                                        <th scope="col">Order SubTotal</th>
                                        <th scope="col">Payment Method</th>
                                      </tr>
                        </thead>
                        <tbody>                      
                        {this.state.RestOrders.map((orders)=>{
                            return(
                                <tr>
                                    <td>{orders.OrderTime}</td>
                                    <td>{orders.SubTotal}</td>
                                    {(() => {
                                   switch(orders.PaymentMethod){
                                    case 0:
                                        return(
                                            <td>Card</td>
                                        );
                                    case 1:
                                        return(
                                            <td>Visa</td>
                                        );
                                    case 2:
                                        return(
                                            <td>Cash</td>
                                        );
                                   }
                                })()}                                
                                </tr>
                            )
                        })}
                        </tbody>
                        </table> 
                        </div> 

                        <div className=" col col-md-6 floatRight">
                        <table className="table table-hover">
                        <thead className="thead-light">
                                      <tr>
                                      <th scope="col">Meal Name</th>
                                      <th scope="col">Meal Price</th>
                                      <th scope="col">Meal Image</th>
                                      </tr>
                        </thead>
                        <tbody>                      
                        {this.state.RestMealOrders.map((meals)=>{
                            return(
                                <tr>
                                    <td>{meals.Mealname}</td>
                                    <td>{meals.MealPrice}</td>
                                    <td>{meals.Image}</td>                             
                                </tr>
                            )
                        })}
                        </tbody>
                        </table>       
                        </div>

                    </div>
                </div>
            </div>
            </>
        )
    }
}
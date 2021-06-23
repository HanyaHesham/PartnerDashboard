import React from 'react';
import axios from 'axios';


export default class Order extends React.Component{
    state={}

    render(){
        return(
            <>
            <div className="container shadow p-3 mb-5 bg-white rounded" style={{marginRight:100}}>
                <h3> Orders Done Successfully From Your Restaurant</h3>
                <hr></hr>

                <div className="Row">
                    <div className="col col-md-12">
                        <table className="table table-hover">
                        <thead className="thead-light">
                                      <tr>
                                      <th scope="col">Meal Image</th>
                                      <th scope="col">Meal Name</th>
                                      <th scope="col">Meal Price</th>
                                      <th scope="col">Order Time</th>
                                      <th scope="col">Order SubTotal</th>
                                      <th scope="col">Payment Method</th>

                                      </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <img className="card shadow-sm p-2 mb-2 bg-white rounded" height="60" width="60" src="images/food.jpg" /></td>
                                <td> Chicken BBQ </td>
                                <td> 65 </td>
                                <td> 23/6/2021 </td>
                                <td> 130 </td>
                                <td> cash </td>
                            </tr>
                            <tr>
                                <td> <img className="card shadow-sm p-2 mb-2 bg-white rounded" height="60" width="60" src="images/food.jpg" /></td>
                                <td> Chicken BBQ </td>
                                <td> 65 </td>
                                <td> 23/6/2021 </td>
                                <td> 130 </td>
                                <td> cash </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>

                </div>
            </div>
            </>
        )
    }
}
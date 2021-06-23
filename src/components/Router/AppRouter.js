import React from 'react';
import{BrowserRouter as Router,Redirect,Route} from 'react-router-dom';
import Slidebar from '../Slidebar';
import Restaurant from './../Restaurant/Restaurant'
import AddMeal from './../Addmeal/Addmeal';
import Order from './../Orders/Order';
import Home from './../HomePage/HomePage';




export default class AppRouter extends React.Component{
    render(){
        const StaticRoute="/HanyaHesham/PartnerDashboard/";

        return(
            <>
            <Router>

                <Slidebar/>
                <switch>
                    <Route component={Home} path={StaticRoute} exact></Route>
                    <Route component={Home} path={`${StaticRoute}Home`} exact></Route>
                    <Route component={Restaurant} path={`${StaticRoute}Restaurant`} exact></Route>
                    <Route component={AddMeal} path={`${StaticRoute}AddMeal`} exact></Route>
                    <Route component={Order} path={`${StaticRoute}Orders`} exact></Route> 

                </switch>
            </Router>


            
            </>
        )
    }
}
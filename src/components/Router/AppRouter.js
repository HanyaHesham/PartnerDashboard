import React from 'react';
import{BrowserRouter as Router,Route} from 'react-router-dom';
import Restaurant from './../Restaurant/Restaurant'
import AddMeal from './../Addmeal/Addmeal';
import Order from './../Orders/Order';
import Menu from '../Menu/Menu';
import Header from '../Header';
 import Login from '../Login/Login';
import Profile from './../Profile/Profile';


export default class AppRouter extends React.Component{
    render(){
        const StaticRoute="/HanyaHesham/PartnerDashboard/";

        return(
            <>
            <Router>

                <Header/>

                <switch>
                    <Route component={Login} path={StaticRoute} exact></Route>
                    <Route component={Login} path={`${StaticRoute}Login`} exact></Route>
                    <Route component={Restaurant} path={`${StaticRoute}Restaurant`} exact></Route>
                    <Route component={AddMeal} path={`${StaticRoute}AddMeal/:id`} exact></Route>
                    <Route component={Order} path={`${StaticRoute}Orders`} exact></Route> 
                    <Route component={Menu} path={`${StaticRoute}Menu`} exact></Route>
                    <Route component={Profile} path={`${StaticRoute}Profile`} exact></Route>



                </switch>
            </Router>


            
            </>
        )
    }
}
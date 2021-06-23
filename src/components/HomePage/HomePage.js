import React from 'react';
import './HomePage.css';

export default class Home extends React.Component{
    state={}

    render(){
        return(
            <>
            <div className="container">
                <div className="d-lg-block " id="UperDiv"> </div>
                <hr/>
                <div className="row justify-content-center">
                    <div>
                        <h1 style={{textAlign:'center'}}>Welcome to FoodAway Family</h1>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

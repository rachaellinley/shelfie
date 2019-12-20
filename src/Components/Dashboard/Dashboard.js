import React from "react";
import axios from "axios";
import Product from "../Product/Product"

class Dashboard extends React.Component {
    constructor(){
        super()
        this.state ={
            products: []
        }
  
    }



    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <Product inventory={this.state.products}/>
            </div>
        )
    }
}

export default Dashboard 
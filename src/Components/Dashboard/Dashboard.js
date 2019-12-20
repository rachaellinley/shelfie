import React from "react";
import axios from "axios";
import Product from "../Product/Product"

class Dashboard extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <Product />
            </div>
        )
    }
}

export default Dashboard 
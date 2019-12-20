import React from "react";
import axios from "axios";

class Product extends React.Component {
    constructor(){
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get("/api/products/").then(response => {
            this.setState({
                products: response.data
            })
        })
    }

    render() {
        return(
            <div>
                {this.state.products}
            </div>
        )
    }
 }


export default Product 
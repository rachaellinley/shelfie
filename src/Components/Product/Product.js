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

        //{this.props.inventory.map(element => {
    // const { productName, productPrice, imgUrl } = element;
    // return (
    //     <div key={element.id}>
    //      
    //      <h3>{productName}</h3>
            // <h3>{productPrice}</h3>
            // <img>{imgUrl}</img>
        return(
            <div>
            
            </div>
        )
    }
 }


export default Product 
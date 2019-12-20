import React from "react";
import axios from "axios";

class Form extends React.Component {
    constructor(){
        super()
        this.state={
            imageUrl: " ",
            productName: " ",
            productPrice: " "
        }
        this.handleImage = this.handleImage.bind(this);
        this.handleProduct = this.handleProduct.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
    }
    handleImage  = (value) => {
            this.setState({imageUrl: value})

    }

    handleProduct = (value) => {
        this.setState({productName: value})
    }

    handlePrice = (value) => {
        this.setState({productPrice: value})
    }

    handleClick(){
        const { productPrice, productName, imgUrl } = this.state;
        let body = {
            productName,
            productPrice,
            imgUrl
        }

        axios.post("/api/products/", body).then(response => {
           console.log('OKAY')
           this.addProduct(response.data)
        });
    }
    

    render(){
        return(
            <div>
                <img></img>
                <h1>Form</h1>
                <h6>Image URL</h6>
                <input onChange={e => this.handleImage(e.target.value)} placeHolder="Image URL"></input>
                <h6>Product Name</h6>
                <input onChange={e => this.handleProduct(e.target.value)}placeHolder="Product Name"></input>
                <h6 onChange={e => this.handleProduct(e.target.value)}>Price</h6>
                <input placeHolder="Price"></input>
                <button>Cancel</button>
                <button onClick={this.handleClick}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form 
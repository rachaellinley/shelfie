let products = [
    {
        imgUrl: "",
        productName: "Shoes",
        productPrice: "$120"
    }
]


  function getProducts(req, res) {
    res.status(200).json(products);
  }

  function addProduct(req, res) {
    products.push(req.body);
    res.status(200).json(places);
  }
  
  
  module.exports = {
    addProduct,
    getProducts
  };
  
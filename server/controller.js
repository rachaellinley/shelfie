let products = [
    {
        imgUrl: "",
        productName: "Shoes",
        productPrice: "$120"
    }
]


  function getProducts(req, res) {
    const db = req.app.get('db')

    db.getProducts().then(response =>{
      res.status(200).json(response);
    })
  }

  function addProduct(req, res) {
    const db = req.app.get('db')
    const {product_name, product_price, img_url} = req.body;

    db.addProduct(product_name, product_price, img_url).then
    (response => {
      res.status(200).json(response);
    })
  }
  
  
  module.exports = {
    addProduct,
    getProducts
  };
  
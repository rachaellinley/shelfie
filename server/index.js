require('dotenv').config()
const express = require("express");
const massive = require('massive');
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log("db is connected")
    
})
.catch(err => console.log(err));


//controller functions
const { addProduct,
        getProducts    
} = require("./controller")

app.use(express.json());

app.get('/api/products', getProducts)
app.post('/api/products', addProduct)



app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${SERVER_PORT} `)
});
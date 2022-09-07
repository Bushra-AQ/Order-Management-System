const client = require('./mainconnection.js');  
const express = require('express');
const app = express();

      // import all controllers-------
const customer_controller = require('./customer_controller');
const product_controller = require('./product_controller');
const order_controller = require('./order_controller');

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.listen(8000, ()=>{
    console.log("Sever is now listening at port 8000");
})

client.connect();

//---------------------------------------------customer----------------------------------------
//get-----
app.get('/customer',customer_controller.customer_data_get);

                          //get by id -------------------------
app.get('/customer/:id',customer_controller.customer_data_getid);

                         // insert data

app.post('/customer',customer_controller.customer_insert_data);

                         //update data------------------------

app.put('/customer/:id',customer_controller.customer_update_data);

                        //delete data -------------------------

app.delete('/customer/:id',customer_controller.customer_delete_data);


//---------------------------------------------products----------------------------------------
                        //get products------------------------
app.get('/product',product_controller.product_data_get);

                        //get product by id-------------------
app.get('/product/:id', product_controller.product_data_gtid)
                        // insert new product----------------- 
app.post('/product', product_controller.product_insert)
                        //update product----------------------
app.put('/product/:id' , product_controller.product_update_data)                      
                        //delete product----------------------
app.delete('/product/:id', product_controller.product_delete_data)                       
//---------------------------------------------orders----------------------------------------
                        //get order data------------------------
app.get('/order_p',order_controller.order_get_data )                      
                        //get order by id------------------
app.get('/order_p/:id', order_controller.order_get_data_by_id)                        
                        // insert new order---------------
app.post('/order_p', order_controller.order_insert_data)                    
                        //update order----------------------
app.put('/order_p/:id', order_controller.order_update_data)                
                        //delete order----------------------
app.delete('/order_p/:id' ,order_controller.order_delete_data) 
                        
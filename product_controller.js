const client = require('./mainconnection.js'); 
module.exports =
{
                     //--------------get product data---------------
product_data_get :  (req, res)=>{
    client.query(`Select * from product`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
},

                  //--------------get dat by id ------------------
  product_data_gtid :(req, res)=>{
    client.query(`Select * from product where product_id=${req.params.id}`,(err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
},
               //----------------insert new product---------------
  product_insert :  (req, res)=> {
    const prod = req.body;
    let insertQuery = `insert into product(product_id ,pname, description , price ,qty) 
                       values(${prod.product_id} , '${prod.pname}', '${prod.description}', '${prod.price}', '${prod.qty}')`
                    
    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{console.log(err.message) }
    })
    client.end;
},

               //---------------update esisting product data----------
  product_update_data :  (req, res)=> {
    let prod = req.body;
    let updateQuery = `update product
                       set pname = '${prod.pname}',
                       price = '${prod.price}'
                       where product_id = '${prod.product_id}'`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
},
                      //---------------delete product data----------
product_delete_data: (req, res)=> {
    let insertQuery = `delete from product where product_id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}

};
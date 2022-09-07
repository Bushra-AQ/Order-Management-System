const client = require('./mainconnection.js');  
module.exports = 
{
order_get_data:(req, res)=>{
    client.query(`Select * from order_p`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
},

order_get_data_by_id :(req, res)=>{
    client.query(`Select * from order_p where order_id=${req.params.id}`,(err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
},

order_insert_data: (req, res)=> {
    const order = req.body;
    let insertQuery = `insert into order_p(order_id ,customer_fid, product_fid,review,tprice,pdate) 
                       values(${order.order_id} , ${order.customer_fid}, ${order.product_fid}, '${order.review}', '${order.tprice}', '${order.pdate}')`
                    
    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{console.log(err.message)}
    })
    client.end;
},
order_update_data: (req, res)=> {
    let order = req.body;
    let updateQuery = `update order_p
                       set review = '${order.review}',
                       pdate = '${order.pdate}',
                       tprice = ${order.tprice}
                       where order_id = '${order.order_id}'`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
},
order_delete_data:(req, res)=> {
    let insertQuery = `delete from order_p where order_id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}
}
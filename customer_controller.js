
const client = require('./mainconnection.js');  

module.exports = {
//------------------get data of all customers----------
 customer_data_get : (req, res)=>{
    client.query(`Select * from customer`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
},

//-------------------get data by id--------------------
customer_data_getid : (req, res)=>{
    client.query(`Select * from customer where customer_id=${req.params.id}`,(err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
},

//-----------------------------insert data ----------
customer_insert_data : (req, res)=> {
    const custom = req.body;
    let insertQuery = `insert into customer(customer_id ,pname, phone,email,address) 
                       values('${custom.customer_id}' , '${custom.pname}', '${custom.phone}', '${custom.email}', '${custom.address}')`
                    
    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{console.log(err.message) }
    })
    client.end;
},

//-----------------------------insert data------------
customer_update_data : (req, res)=> {
    let custom = req.body;
    let updateQuery = `update customer
                       set pname = '${custom.pname}',
                       phone = '${custom.phone}'
                       where customer_id = '${custom.customer_id}'`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
},

//-------------------------------delete-------------------------------
    customer_delete_data : (req, res)=> {
    let insertQuery = `delete from customer where customer_id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}
};
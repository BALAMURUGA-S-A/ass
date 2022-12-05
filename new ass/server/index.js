const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const bodyparser = require('body-parser');
const mycon = require('mysql');



const app = express();
app.use(cors());
app.use(fileupload());
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

let c = mycon.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "Bala1997@",
    database : "storage"
})

c.connect(function(error){
    if(error){console.log(error);}
    else{console.log('Database Connected');}
})

app.post('/Newform',(request,response)=>{

    let {firstname,lastname,email,phonenumber,password} = request.body;
    let sql = 'insert into files(username,password1,firstname,lastname,email,phonenumber,password,status) values(?,?,?,?,?,?,?)' ;
    c.query(sql,[phonenumber,phonenumber,firstname,lastname,email,phonenumber,password,0],(error,result)=>{
        if(error){
            let a ={"status":'error'}
            response.send(a);
        }
        else
        {
            let a={"status":"success"}
            response.send(a);
        }
    })
})

app.post('/Index',(request,response)=>{
    let {username,password} = request.body;

    let sql = 'select * from files where username=?';

    c.query(sql,[username],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else if(result.length > 0){
            let username1 = result[0].username;
            let password1 = result[0].password;

            if(username1 === username && password1 === password){
                let s = {"status":"success"};
                response.send(s);
            }
            else{
                let s = {"status":"invalid"};
                response.send(s);
            }
        }
        else{
            let s = {"status":"error"}
            response.send(s);
        }
    })

})
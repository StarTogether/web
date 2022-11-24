const express = require('express');
var mysql = require('mysql2')
const app = express()
const port = 3001
var con = mysql.createConnection({
    host: "43.132.167.131",
    user: 'root',
    password: 'root',
    database: "xingce",
    port:'1880'  // 指定port，不然使用默认接口找不到
});
con.connect()
app.get('/',(req,res)=>{
    console.log(req.query)
    let {name,
    email,
    telnumb,
    bussiness,
    position,
    expectation} = req.query
    console.log('name:',name,'email:',email,'telnumb',
    telnumb,'bussiness',bussiness,'expectation',expectation,
    'position',position)
    /*
       * add a data 
    */
    //name = 'yumeng';
    //var addSql = `INSERT INTO user(telnum, name, email, business, position, expectation ) VALUES(`;
    var addSql = 'insert into user(telnumb, name, email, business, position, expectation) values (?,?,?,?,?,?)';
    var addSqlParams = [telnumb,name,email,bussiness,position,expectation];
    
    /*
    console.log(addSqlParams);
    addSqlParams = addSqlParams.map(x=>""+x+"");
    console.log(addSqlParams);
    addSqlParams= addSqlParams.join(', ');
    console.log(addSqlParams);
    addSql = addSql+addSqlParams+' )'
    console.log(addSql);
    */
    con.query(addSql,addSqlParams,function(err,result){
        if(err){
            console.log(err.message);
            return
        }
        else{
            console.log(result);
        }
    })
    var check = "SELECT * FROM user"
    con.query(check,function(err,result){
        if(err){

        }else{
            console.log(result);
        }
    })
})
app.listen(port,()=>{
    console.log(`listen on ${port}`);
})

/**
 * CREATE TABLE user (
  telnumb VARCHAR(45) NOT NULL,
  name VARCHAR(45) NULL,
  email VARCHAR(45) NULL,
  business VARCHAR(45) NULL,
  position VARCHAR(45) NULL,
  expectation VARCHAR(45) NULL,
    PRIMARY KEY (telnumb)) default charset=utf8;
 */
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'atleti'
});
const MYSQL_SELECT_NAME = 'select name from club';
conn.connect(err=>{
  if (err) return err;
});
app.use(cors());

app.listen(4000, ()=>{
  console.log("Hello");
});
app.get('/',(req,res)=>{
  conn.query(MYSQL_SELECT_NAME,(err,result)=>{
    if(err) return err;
    res.json(result);
  });
  });
  app.get('/clubs',(req,res)=>{
    const {nume} = req.query;
    const INSERT_SQL = `insert into club(name) values(${nume})`;
    conn.query(INSERT_SQL, (err,res)=>{
      if(err){return err}else{return "success"};
    });''
  });
  app.get('/rasp',(req,res)=>{
    res.send("Asteaptadafd");
    });

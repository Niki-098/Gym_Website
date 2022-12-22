const express=require('express')
var bodyParser=require("body-parser");
const nodemailer = require('nodemailer');
const {MongoClient}=require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const server= new MongoClient(url);
const db_name='LoginSignup';
// const db_name1='CustomerDetail';
const app=express()
const port=7882


app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.sendFile('index.html')
  })
  
  const db=client.db(db_name)
//   const dbb=server.db(db_name1)

 

  //*********************/Login************************
//   app.post("/login",async(req,res)=>{
//     try{
//       const name=req.body.name;
//       const age=req.body.age;
//       const gender=req.body.gender;
//       const email=req.body.email;
//       const phone=req.body.phone;
//       const usermail = await db.collection('data').findOne({email:email});
//       // res.send(usermail);
//     //   res.redirect('/index.html');
      
//     }catch (error){
//       console.log(error, error.message)
//       res.status(400).send("invalid Email or password")
//     }
//     // res.redirect('/form-style-.html');
//   })


// *************************************************

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Signup!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  app.post("/index.html",function(req,res){

    console.log(req.body)
      var name= req.body.name
      var email=req.body.email
      var gender=req.body.gender
      var phone=req.body.phone
      var age=req.body.age
    //   var age=req.body.age
      
      
      // var address = req.body.address
      // var city = req.body.city

      
  
      var dt={
          "name":name,
          "email": email,
          "gender": gender,
          "phone": phone,
          "age": age,
          // "mobile":mobile,
          // "address":address,
          // "city":city,
        //   "password":password,
      }


      db.collection('data').insertOne(dt,function(err,collection){
        if(err) console.log(err)
        else console.log("Record Inserted Succesfully.")

    })
  })
  



// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
app.listen(port,()=>{
    console.log(`App listening on port ${port}!`)
})
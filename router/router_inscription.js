const express =require('express')
const router = express.Router();
const db = require('../BD/database');
let bodyParser = require('body-parser');
let jsonParser= bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({extended:false});


router.post('/inscription',  urlencodedParser,(req,res) =>{

    let {nom,password_user, age, email } = req.body
    console.log("donnee_du formulaire",req.body)

    let sql= "INSERT INTO `voyageur` (`nom`, `password_user`, `age`, `email`) VALUES (?,?,?,?)"; 
    
    db.query(sql,[nom,password_user,age,email],(err,result)=>{
       console.log('bonjour ');
        if (err) { 
            console.log("ERREUR",err);   
            // res.send('bonjour') 
            
        } else {
            console.log("success",result);
         res.redirect('/')
        }
   })

})





module.exports = router;

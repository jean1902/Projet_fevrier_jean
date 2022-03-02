const express = require('express');

const app = express();

const PORT =5000;

let database = require("./BD/database");

let router_inscription = require('./router/router_inscription') //la est le probleme

database.connect(function(err){

    if(!err){

        console.log(err)
        app.set('views','./views')
        app.set('view engine','ejs')
        // app.use(express.json())
        app.use('/Public', express.static('public'));
        app.use("/", router_inscription);
        console.log('connexion reussie')

    }else{
        console.log('connection echec ' + JSON.stringify(err , undefined ,2))
    }
})


const { body, validationResult } = require('express-validator');

app.post('/inscription',[
    body('email','entrer une email valide')
    .exists()
    .isEmail(),
  
    body('code','entrer code postal valide')
    .exists()
    .isNumeric(),
    
    body('sexe','entrer votre sexe')
    .exists()
    .isLength({min:4}),
    
    
    body('name','entrer votre nom')
    .exists()
    .isLength({min:4}),
    
    body('prenom','entrer votre prenom')
    .exists()
    .isLength({min:4}),
    
    
  ],(req,res )=>{
    // const errors =validationResult(req);
    // if(!errors.isEmpty()){
    //   return res.status(400).json({errors: errors.array()})
    //   console.log(errors)
    // }
  })
  




app.get('/', (req ,res)=>{
    res.render('index');
})


app.get('/connect', (req ,res)=>{
    res.render('connect');
})
app.get('/inscription', (req ,res)=>{
    res.render('inscription');
})
app.get('/reservation', (req ,res)=>{
    res.render('reservation');
})



app.listen( PORT , ()=>{
    console.log(`listening on port ${PORT}`)
})

// app.get('/inscription', (req ,res)=>{
//     res.render('inscription');
    
// })
// app.get('/reservation', (req ,res)=>{
//     res.render('reservation');
    
// })
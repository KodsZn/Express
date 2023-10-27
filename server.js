// require express
const express=require("express")

//create instance
const app=express()
//middleware
app.use(express.json())//you can use body parser instead

//create PORT
const PORT=5000

//create server
app.listen(PORT,(error)=>{
    error?console.log(error):console.log("server created successfully")
})
app.set('view engine','pug')
app.set('views','./views')


app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/ContactUs',(req,res)=>{
    res.render('ContactUs')
})
app.get('/OurServices',(req,res)=>{
    res.render('OurServices')
})
app.get('/OffLigne',(req,res)=>{
    res.render('OffLigne')
})

//time out
app.use(function(req,res,next){
    var data = new Date();
    if((date.getDay()==0)|| (data.getDay()==6)||(date.getHours()<9)||(date.getHours()>17)){
        next();
    }
    else{
        res.redirect('/OffLigne');
    }
});
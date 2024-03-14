var express = require("express") //this is part of building an express java webpage after installing express as 'require' is a function for running java code on a server and const decalres variable called express.
var app = express() //this declares variable called app to link it to variable express to make the webpage work
var port = process.env.port || 3000; //this is to set up the port
app.listen(port,()=>{
console.log("App listening to: "+port) //this is to make the app listen to the console log and the port and show it in the terminal/console log
})
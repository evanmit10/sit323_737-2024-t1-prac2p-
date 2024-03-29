const express= require("express"); //this is part of building an express java webpage after installing express as 'require' is a function for running javascript code on a server and const declares a variable called express.
const app= express();  //this declares variable called app to link it to variable express to make the webpage work
const addTwoNumber= (n1,n2) => { //this and the next code below is what the variables n1 and n2 would do in order to make the code work
    return n1+n2;
}
app.get("/addTwoNumber", (req,res)=>{ //this is to show the text in the url (link) area 
    const n1= parseInt(req.query.n1); //this is to show n1 along with n2 in the next line of code in the url (link) area
    const n2=parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2); //const result is a variable to define addTwoNumebr that would add two numbers
    res.json({statuscocde:200, data: result });  //this is to show the status code and the data result of adding twi nunbers from n1 and n2
});

app.get("/", (req, res) => {
    const n1 = "<html><body><H1>HELLO WORLD </H1></body></html>"; //this line is to create the code to show on the webpage when executing it using inline html
    res.set('Content-Type', 'text/html'); //this is to set the content type and what type of coding language it is
    res.send(Buffer.from(n1)); //this is used to send HTTP response along with its body parameter being the buffer data
})
console.log (addTwoNumber(19,12)); //this is to show the result of two added numbers in the terminal/console log which is 31 once running the code
const port=3040; //this is the chosen port to run the website and the code and how to set up the port
app.listen(port,()=> {
    console.log("hello i'm listening to port "+port); //this is to make the app listen to the console log and the port and show it in the terminal/console log
})


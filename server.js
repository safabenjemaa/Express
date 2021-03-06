
console.clear();
const express = require("express");
const path= require ("path");
const app = express();

// app.use(express.static("public"));


const midle=(req, res, next) => {

  const date = new Date();
  let jour = date.getDay();
  let heure = date.getHours();

if ( jour>=1 && jour<9 && heure>=9 && heure<=17) {

return next();
}
else {
res.send("Site hors ligne");
}

};

app.use('/',midle,express.static(path.join(__dirname,"public")))
app.use('/', midle,(req,res)=> {
// console.log("object")
  res.sendFile(__dirname+"/public/index.html")

})

// app.use ("/",midle,(req,res)=> {

//   res.send("404")
// })
const port = process.env.PORT || 4000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on port http://localhost:${port}`);
});




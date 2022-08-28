// create an express app
const express=require('express')
const excelToJson = require('convert-excel-to-json');
var cors = require('cors')
const app=express()
app.use(cors());
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
//.env require dotenv



// parse application/json
// app.use(bodyParser.json())
  

// use the express-static middleware


// define the first route

app.get("/", function (req, res) {
 res.sendFile(__dirname+'/tasty/contact.html')
})

app.get("/menu", function (req, res) {
  const result = excelToJson({
    sourceFile: './data.xlsx',
    sheets: ['menu']
})
  res.send(result)
})

app.get("/gallery", function (req, res) {
  const result = excelToJson({
    sourceFile: './data.xlsx',
    sheets: ['gallery']
})
  res.send(result)
})

app.get("/events", function (req, res) {
  const result = excelToJson({
    sourceFile: './data.xlsx',
    sheets: ['events']
})
  res.send(result)
})
// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
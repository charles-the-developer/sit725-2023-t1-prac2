var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS middleware to prevent CORS errors
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

var port = process.env.port || 3000;

// API endpoint for addition
app.get('/add', (req, res) => {
    const { firstNumber, secondNumber } = req.query;
    if (!firstNumber || !secondNumber) {
        return res.status(400).json({ error: 'Both numbers are required' });
    }
    const result = parseFloat(firstNumber) + parseFloat(secondNumber);
    res.json({ result });
});

app.listen(port,()=>{
    console.log("App running on: http://localhost:"+port)
})
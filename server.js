const cors = require('cors');
const express = require('express');
const bodyparser = require('body-parser');

const port = 8000;
// Setup empty JS object to act as endpoint for all routes
projectData={};

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
app.listen(port ,()=>{
    console.log(`server running in : http://localhost:${port}`);
})

// Require Express to run server and routes
app.get('/getAll',(request,response)=>{
    response.send(projectData).status(200);
})

app.post('/postData',(request,response)=>{
    projectData={
        temp:request.body.temp,
        date:request.body.date,
        content:request.body.content
    };
    response.send(projectData).status(200).end();
 
});


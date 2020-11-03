const express = require('express'); // import express
const app = express(); // create instance of express app
const port = 3000; // declare local host post
const {readFile} = require('fs'); //import function from node file system module

// get request, i.e. request data only and will not modify or update
// first argument: url
// second argument: callback function to handle event
// request = incoming data from user
// response = outgoing data from server
/*
app.get('/', (request, response) => {

  // read html file with utf8 encoding
  readFile('./index.html', 'utf8', (err, html) => {

    // respose to client when there is error
    if (err) {
        response.status(500).send('server out of order');
    }

    // send response to client
    response.send(html);
  });
});
*/

app.use(express.static('public'))

//listen to incoming requests
app.listen(port, () => {
  console.log(`App available on http://localhost:${port}`)
});

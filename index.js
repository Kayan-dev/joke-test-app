const express = require('./node_modules/express');

const app = express();

// use $PORT if it is defined
// use 3000 if $PORT is not defined
const port = process.env.PORT || 3000



    // HTML string
const page =  `<html>
  <head>
    <title>Yigit Efecan Kaya</title>
  </head>
 <h1>Why do comedians love !false?</h1>
  <body>
    <p>It's funny because it's true.</p>
  </body>
</html>`


// confirmation function
function onListen() {
    console.log(`Listening on :${port}`)
}
// handler function
function onRequest() {
    console.log('testing... request')
}

app.get(
    '/', // path
    (request, response) => { // handler callback
        const message = `My favorite move is ${request.params.title}`;
        response.send(page)
        },
    
    
)



// start listening
app.listen(
    port, // TCP port where the server listens
    onListen, // callback runs when server starts
)
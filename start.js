const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendFile(__dirname + '/Index.html');
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
  });

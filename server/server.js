const express = require('express');
var app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(port, ()=>{
  console.log(`Server up on port ${port}`);
})
module.exports.app = app;

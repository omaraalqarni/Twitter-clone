const express = require('express');
const app = express();

//middlewares
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

//const cors = require('cors');

app.get('/', (req, res) => {
  res.json({ 
    "message": "Tweeter!!🐦"
  })
});

app.post('/tweets', (req, res) => {

});




port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log("listening on port " + port);
});

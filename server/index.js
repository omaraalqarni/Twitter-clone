const express = require('express');


//middlewares
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
app.use(cors())

app.get('/', (req, res) => {
  res.json({ 
    message: 'Twitter'
  })
});

app.post('/tweets', (req, res) => {
  console.log(req.body);
});




port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log("listening on port " + port);
});

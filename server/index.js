const express = require('express');


//middlewares
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())

const db = require('monk')('localhost/twitter');
const tweets = db.get('tweets');
app.get('/', (req, res) => {
  
});

app.post('/tweets', (req, res) => {
  if(validateTweet(req.body)) {
    const tweet = {
      name: req.body.name.toString(),
      content: req.body.content.toString(),
      dateOfCreation: new Date()
    };
    tweets
      .insert(tweet)
      .then(createdTweet => {
        res.json(createdTweet);
      });

  } else{
    res.status(422);
    res.json({
      message: 'invalid input'
    });
  }
});




port = process.env.PORT || 6969;
app.listen(6969, () => {
  console.log("listening on port " + port);
});

function validateTweet(tweet){
  return tweet.name && tweet.name.toString().trim() !== '' && 
  tweet.content && tweet.content.toString().trim() !== '';
}
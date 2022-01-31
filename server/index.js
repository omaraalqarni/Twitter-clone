const express = require('express');


//middlewares
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

var Filter = require('bad-words')
var filter = new Filter();
const db = require('monk')('localhost/twitter');
const tweets = db.get('tweets');
app.get('/', (req, res) => {
  
});

app.post('/tweets', (req, res) => {
  if(validateTweet(req.body)) {
    const tweet = {
      name: filter.clean(req.body.name.toString()),
      content: filter.clean(req.body.content.toString()),
      dateOfCreation: new Date()
    };
    tweets
      .insert(tweet)
      .then(createdTweet => {
        res.json(createdTweet);
        console.log(tweets);
      });

  } else{
    res.status(422);
    res.json({
      message: 'invalid input'
    });
  }
});

app.get('/tweets', (req, res) => {
  tweets
  .find()
  .then(tweets => {
    res.json(tweets);
  });

});


port = process.env.PORT || 6969;
app.listen(6969, () => {
  console.log("listening on port " + port);
});

function validateTweet(tweet){
  return tweet.name && tweet.name.toString().trim() !== '' && 
  tweet.content && tweet.content.toString().trim() !== '';
}
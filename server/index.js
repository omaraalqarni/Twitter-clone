const express = require('express');
//middlewares
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://omar:509018@twitter.yphmy.mongodb.net/Twitter?retryWrites=true&w=majority')

app.use(cors());
app.use(express.json());

var Filter = require('bad-words')
var filter = new Filter();


const tweets = db.get('tweets');
app.get('/', (req, res) => {
  
});

const limiter = rateLimit({
  windowMs: 10 *1000,
  max: 1,
  standardHeaders: true,
  legacyHeaders: false,
});
app.post('/tweets',limiter, (req, res) => {
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
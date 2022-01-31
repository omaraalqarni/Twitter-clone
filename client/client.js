const form = document.querySelector('form');
const API_URL = 'http://localhost:6969/tweets';
const tweetElement = document.querySelector('.tweet');
listAllTweets();
$(".progress").toggle();
form.addEventListener('submit',(event) => { 
  $('.progress').toggle();
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');
  const tweet = {
    name,
    content,
  };

  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(tweet),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
    .then(createdTweet => {
     $('.progress').toggle();
     form.reset();
     listAllTweets()
  });
});

function listAllTweets() {
  tweetElement.innerHTML = '';
  fetch(API_URL)
  .then(response => response.json())
  .then(tweets => {
    console.log(tweets);
    tweets.reverse();
    tweets.forEach(tweet => {
      const div = document.createElement('div');

      const header = document.createElement('h3');
      header.textContent = tweet.name;
      
      const contents = document.createElement('p')
      contents.textContent = tweet.content;

      const dates = document.createElement('small');
      dates.textContent = new Date(tweet.dateOfCreation);


      div.appendChild(header);
      div.appendChild(contents);
      div.appendChild(dates);
      tweetElement.appendChild(div);
    });
  });
}
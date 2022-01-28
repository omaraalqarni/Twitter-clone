console.log("hi");
const form = document.querySelector('form');
const API_URL = 'http://localhost:6969/tweets'

$(".progress").toggle();
form.addEventListener('submit',(event) => { 
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');
  const tweet = {
    name,
    content,
  };
  $('.progress').toggle();  
  setTimeout(function(){
    // toggle back after 1 second
    $('.progress').toggle();  
  },1000);

  fetch(API_URL, { 
    method: 'POST',
    body: JSON.stringify(tweet),
    headers: { 
      'Content-Type': 'application/json'
    }
  });
  console.log(tweet);
});
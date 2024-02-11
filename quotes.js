const quote = document.querySelector(".quote");
const regenBtn = document.querySelector(".regen-btn");
const api = "shI5rsmDE2H8R7Y9LQNC4w==t5Oap4xXkRRbxa6q"

var category = 'love'

const request = import('request');
var category = 'love';
function callAPI() { 
    request.get({
  url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
  headers: {
    'X-Api-Key': 'shI5rsmDE2H8R7Y9LQNC4w==t5Oap4xXkRRbxa6q'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});
}

regenBtn.addEventListener("click", () => {
    callAPI();
});



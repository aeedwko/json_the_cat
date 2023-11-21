const request = require('request');

const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  if (error) throw error;
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("Requested breed not found.");
  } else {
    console.log(data[0].description);
  }
});
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    
    // the request failed: print the error on the screen
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);

      if (data.length > 0) {
        callback(null, data[0].description);
      } else {
        callback("We don't have any data!", null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
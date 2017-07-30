const rp = require('request-promise');

function getValues() {
  return rp({
    method: 'GET',
    url: 'https://api.wit.ai/message?v=20160526',
    qs: {
      q: 'What is 2+5'
    },
    headers: {
      'User-Agent': 'Request-Promise',
      'Authorization': 'Bearer RJGH4PYI5IGLY5ZD66W24MOGFFGR6LQZ'
    },
    json: true
  })
  .then(res => {
    return res; 
  });
}

module.exports = getValues;

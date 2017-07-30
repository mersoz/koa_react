const rp = require('request-promise');

function getValues() {
  return rp({
    url: 'https://api.wit.ai/message?v=20160526',
    qs: {
      q: 'What is 2+5'
    },
    headers: {
      'User-Agent': 'Request-Promise',
      'Authorization': 'RJGH4PYI5IGLY5ZD66W24MOGFFGR6LQZ'
    },
    json: true
  })
  .then(res => console.log(res));
}

module.exports = getValues;

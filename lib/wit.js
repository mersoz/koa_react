const rp = require('request-promise');

function getValues(message) {
  return rp({
    method: 'GET',
    url: 'https://api.wit.ai/message?v=20160526',
    qs: {
      q: message
    },
    headers: {
      'User-Agent': 'Request-Promise',
      'Authorization': 'Bearer RJGH4PYI5IGLY5ZD66W24MOGFFGR6LQZ'
    },
    json: true
  })
  .then(async res => {
    const ans = res.entities.math_expression[0].value;
    return eval(ans);
  });
}

module.exports = getValues;

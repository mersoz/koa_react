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
    const calc = await ans.split(' ').map((val)=>{
      if(val.match(/[0-9]/)) return parseFloat(val);
      return val;
    }).join(' ');
    console.log(calc);
    return res.entities.math_expression;
  });
}

module.exports = getValues;

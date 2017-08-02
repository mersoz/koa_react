const rp = require('request-promise');

function getValues(message) {
  console.log(message);
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
    if(res.entities.number) return translateText(res.entities.number, message);
    const ans = res.entities.math_expression[0].value;
    console.log(ans);
    return eval(ans);
  });
}

function translateText(res, message) {
  let ans = '';
  const operators = message.toLowerCase().match(/plus|minus|times|divided/g);
  const operatorTranslation = {
    plus: '+',
    minus: '-',
    times: '*',
    divided: '/'
  };
  res.forEach((number, i)=>{
    console.log(number);
    ans += Math.abs(number.value);
    if(operators[i])ans += operatorTranslation[operators[i]];
  });
  console.log(ans);
  return eval(ans);
}

module.exports = getValues;

const request = require('request');

const options = {
  method: 'POST',
  url: 'https://auth.edrv.io/oauth/token',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
  form: {
    grant_type: 'client_credentials',
    client_id: 'FrlMpsT7u7muX0voM5OgX4whufJoBnYE',
    client_secret:
      'qFrt3zZRFNBveBVSpvroYiaVhPwuQMN4XcB7nbMSbjOeBfvc4hA4IZvkDo5pRPo4',
    audience: 'https://api.edrv.io',
  },
  json:true
};

function getEdrvToken(){
    return new Promise(resolve => {
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            resolve(body.access_token);
        })
    }).then(value => {
        console.log(value)
    })
}

module.exports = {
    getEdrvToken,
};
const expressJwt = require('express-jwt');
const config = require('../config/config.json');

module.exports = jwt;

function jwt() {
    const { secret } = config;
    return expressJwt({
        secret : secret,
        getToken: function fromCookie (req) {
          var token = req.cookies.token || req.body.token || req.query.token || req.headers['x-token'] ;
          if (token) {
            return token;
          } 
          return null;
        }
      }).unless({
          path:[
            '/',
            '/user'
          ]}
      )
}

var User = require('../models/user');
var bcrypt = require('bcryptjs');
var secret = require('../config/config.json');
const jwt = require('jsonwebtoken');

exports.register = function(req,res){
    var password = bcrypt.hashSync(req.body.password,10);
    console.log(password);
}
exports.login = async function(req,res){
    const user = await User.findOne({email:req.body.email  });
    if (user && bcrypt.compare(req.body.password, user.password)) {
        const {password, ...userWithoutHash} = user.toObject();
        var token = jwt.sign({sub:user.id}, secret.secret);
        var newReturn = {
            ...userWithoutHash,
            token
        };
        res.json(newReturn)
    }
}
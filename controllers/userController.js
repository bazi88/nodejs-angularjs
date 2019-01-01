var User = require('../models/user');
var bcrypt = require('bcryptjs');
var secret = require('../config/config.json');
const jwt = require('jsonwebtoken');

exports.register = async function(req,res){
    if(await User.findOne({email:req.body.email})){
        res.json({message:"Email is takken"});
    }else{
        var password = bcrypt.hashSync(req.body.password,10);
        const user = new User({email:req.body.email,password:password});
        await user.save();
    }
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
        res.cookie('token',token);
        res.json(newReturn)
    }
}
exports.protected = function(req,res){
    res.send("ok");

}
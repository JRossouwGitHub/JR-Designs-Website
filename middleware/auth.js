const config = require('config');
const jwt = require('jsonwebtoken');
const http = require('../config/route').http;

function auth(req, res, next){
    const token = req.header('x-auth-token');

    if(!token){
        //return res.status(401).json({msg: 'No token, authorization denied'})
        return res.status(401).redirect(req.headers.origin)
    }

    try{
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded;
        next();
    } catch(e){
        res.status(400).json({msg: 'Token is not valid'});
    }
}

module.exports = auth;
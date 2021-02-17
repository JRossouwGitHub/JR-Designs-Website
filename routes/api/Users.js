const express = require('express');
const Router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const http = require('../../config/route').http;
const User = require('../../models/User');

Router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", `${http}`); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
    res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, DELETE');
    next();
});

// @route  POST api/users
// @desc   Register new users
// @access Public
Router.post('/', (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    User.findOne({email})
    .then((user) => {
        if(user){
            return res.status(400).json({msg: 'User with that email already exists'});
        }

        const newUser = new User({
            name,
            email,
            password
        })

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then((user) => {
                        jwt.sign(
                            {id: user.id},
                            config.get('jwtSecret'),
                            {expiresIn: 3600},
                            (err, token) => {
                                if(err) throw err;
                                res.json(
                                    {
                                        token, 
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    });
                            }
                        )
                    });
            })
        })
    })
});

module.exports = Router;
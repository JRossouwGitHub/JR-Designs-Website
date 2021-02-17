const express = require('express');
const Router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')

const http = require('../../config/route').http;
const User = require('../../models/User');

Router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", `${http}`); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
    res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, DELETE');
    next();
});

// @route  POST api/auth
// @desc   Auth the user
// @access Public
Router.post('/', (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    User.findOne({email})
    .then((user) => {
        if(!user){
            return res.status(400).json({msg: 'User does not exist'});
        }

        bcrypt.compare(password, user.password)
            .then((isMatch) => {
                if(!isMatch){
                    return res.status(400).json({msg: 'Invalid credentials'});
                }

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
                );
            })
    })
});

// @route  GET api/auth/user
// @desc   Get user data
// @access Private
Router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then((user) => {
            res.json(user)
        })
});

module.exports = Router;
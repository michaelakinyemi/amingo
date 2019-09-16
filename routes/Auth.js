const express = require('express');
const User = require('./models/User');
const bcrypt = require('bcrypt');

const router = express.Router();

/**
 * Post route for register a new user
 *
 * @name POST /auth/regiser
 *
 * @param {string} email - email of the user
 * @param {string} password - password of the user
 * @param {name} name - name of the user
 * @param {occupation} occupation - occupation of the user
 */

router.post('/register', (req, res) =>{
    User.findOne({email: req.body.emai})
        .then( user => {
        if (user){
            //Return error message
        res.json({message: "Email already exist"})
        } else {
            // save new user
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        occupation: req.body.occupation
    })

    newUser
        .save()
        .then(user=> {
            res.json(user)
        })
        .catch(err=> {
            res.json(err)
        })
    });
        router.get('/', (req, res)=> {
            User.find()
            .then(users => res.json(users))
            .catch(err => res.json(err));


        });

module.exports = router;
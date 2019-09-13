const express = require('express')
const User = require('../models/Post')

const router = express.Router();

/**
 * Post route for a Post
 * 
 * @name POST /post/regiser
 * 
 * @param {string} message - email of the user
 * @param {string} email - email of the user
 */
router.post('/', (req, res) =>{
    const newPost = new Post({
        message: req.body.message,
        email: req.body.email,

    })

    newPost
        .save()
        .then(post=> {
            res.json(post)
        })
        .catch(err=> {
            res.json(err)
        })
    });
        router.get('/', (req, res)=> {
            Post.find()
            .then(post => res.json(post))
            .catch(err => res.json(err));


        });

module.exports = router;
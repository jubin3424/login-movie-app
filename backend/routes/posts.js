var express = require('express');
var router = express.Router();
var Post = require('../models/post')

router.get('/', (req, res) => {
    Post.find({}, 'title description', (error, posts) => {
        if (error) { console.error(error)}
        res.send({
            posts: posts
        })
    }).sort({_id: -1})
});

router.get('/:id', (req, res) => {
    var db = req.db;
    Post.findById(req.params.id, 'title description', (error, post) => {
        if (error) { console.error(error);}
        res.send(post)
    })
})

router.post('/new', (req, res) => {
    var db = req.db;
    var title = req.body.title;
    var description = req.body.description;
    var new_post = new Post({
        title: title,
        description: description
    })

    new_post.save((error) => {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: 'Post saved successfully!'
        })
    })
})

router.put('/edit/:id', (req, res) => {
    var db = req.db;
    Post.findById(req.body.id, 'title description', (error, post) => {
        if (error) { console.log(error); }

        post.title = req.body.title;
        post.description = req.body.description
        post.save((error) => {
            if (error) { console.log(error) }
            res.send({
                success: true,
                message: 'Edited Successfully'
            })
        })
    })
})

router.delete('/delete/:id', (req, res) => {
    var db = req.db;
    Post.remove({
        _id: req.params.id
    }, (error, post) => {
        if (error)
            res.send(error)
        res.send({
            success: true,
            message: '삭제하였습니다.'
        })
    })
})

module.exports = router


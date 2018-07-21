var express = require('express');
var router = express.Router();
var posts = require('../posts');


router.get('/', (req, res, next) => {
    res.send(posts)
});

var app = express();


// router.get('/:id', (req, res, next) => {
//     var id = parseInt(req.params.id, 10);
//     var movie = movies.filter((movie) => {
//         return movie.id === id
//     });
//     res.send(movie)
// });

module.exports = router;
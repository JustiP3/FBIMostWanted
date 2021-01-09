const express = require('express');
const router = express.Router();
//const api_helper = require('../helpers/APIHelper')

router.get('/api', function(req, res, next) {
    res.render('index', { title: 'Express' });
    /* 
    api_helper.make_API_call('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        res.json(response)
        res.render("test")
    })
    .catch(error => {
        res.send(error)
    })
    */
})

module.exports = router;






const express = require('express');
const router = express.Router();
const api_helper = require('../helpers/APIHelper')

/* GET home page. */
router.get('/', function(req, res, next) {
  api_helper.make_API_call('https://api.fbi.gov/wanted/v1/list')
    .then(response => {
        res.json(response)
       
    })
    .catch(error => {
        res.send(error)
    })
});

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

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

module.exports = router;

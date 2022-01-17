var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/',async function(req, res, next) {
  const query= await axios.get("https://randomuser.me/api/?results=9");
  res.render('index', { title: 'Express', users: query.data.results });
});

module.exports = router;

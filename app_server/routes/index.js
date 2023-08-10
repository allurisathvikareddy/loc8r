var express = require('express');
var router = express.Router();
var homepagecontroller=function(req,res){
  res.render('index',{title:'Mean Class of AI-A'});
};
/* GET home page. */
router.get('/', homepagecontroller);
module.exports = router;

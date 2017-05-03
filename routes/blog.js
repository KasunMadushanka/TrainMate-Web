var express = require('express');
var router = express.Router();


/* GET landing page. */
router.get('/', function(req, res, next) {
  res.render('blog/index');
});



/*************** trainSearching Page  ************************/

var train = require('../controller/blog/searchTrains');

router.route('/train').get(train.page);
router.route('/search').post(train.results);
router.route('/best').get(train.best);
router.route('/register').get(train.register);
router.route('/controller/request').post(train.insertReq);

router.route('/controller/checkmails').post(train.check);

//controller/checkmails
///controller/request

/*************** trainSearching Page   ************************/





module.exports = router;

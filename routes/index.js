var express = require('express');
var router = express.Router();
var ctrlLocation = require('../controller/locations');
var ctrlothers = require('../controller/others');
/* Location page. */
router.get('/', ctrlLocation.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location/review/new',ctrlLocations.addReview);
/*other pages */
router.get('/about',ctrlothers.about);
 
module.exports = router;

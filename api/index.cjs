const express = require('express');
const router = express.Router();


router.use('/robots', require('./robots.cjs'));
router.use('/tasks', require('./tasks.cjs'));
router.use('/reviewers', require('./reviewers.cjs'));
module.exports = router;




// '/robots/:task'(robots cards by Task)
// '/robots/:id' (robot details for detail Page)
// . '/reviewers/:robotid' (returns all reviewers that have reviewed a specific robot)


// ALSO write functions in db files
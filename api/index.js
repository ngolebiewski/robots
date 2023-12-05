const express = require('express');
const router = express.Router();

console.log('in index.js')

router.use('/robots', require('./robots.js'));
router.use('/tasks', require('./tasks.js'));
module.exports = router;




// '/robots/:task'(robots cards by Task)
// '/robots/:id' (robot details for detail Page)
// . '/reviewers/:robotid' (returns all reviewers that have reviewed a specific robot)


// ALSO write functions in db files
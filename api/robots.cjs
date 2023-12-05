const express = require('express');
const router = express.Router();

const { getRobots } = require ('../db/robots.cjs');

router.get('/', async (req, res) => {
  try {
    const allRobots = await getRobots();
    res.send(allRobots);
  }catch(err){
    console.log(err);
  }
})

module.exports = router;
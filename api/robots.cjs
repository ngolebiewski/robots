const express = require('express');
const router = express.Router();

const { getRobots, getRobotDetails } = require ('../db/robots.cjs');

//all robots
router.get('/', async (req, res, next) => {
  try {
    const allRobots = await getRobots();
    res.send(allRobots);
  }catch(err){
    console.log(err);
  }
})

//robot details by robotID
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  try {
    const robotDetails = await getRobotDetails(id)
    res.send(robotDetails);
  }catch(err){
    console.log(err);
  }

})

module.exports = router;
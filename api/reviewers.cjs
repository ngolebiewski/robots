const express = require('express');
const router = express.Router();

const { getReviewersByRobotID } = require('../db/reviewers.cjs')

router.get('/:robotID', async (req, res, next) => {
  const { robotID } = req.params;
  console.log(robotID)
  try {
    const data = await getReviewersByRobotID(robotID);
    res.send(data);
  }catch(err){
    console.log(err);
  }
})


module.exports=router;
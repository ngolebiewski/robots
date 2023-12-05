const express = require('express');
const router = express.Router();

const { getTasks, getRobotsByTask } = require('../db/tasks.cjs')

router.get('/', async (req, res, next) =>{
try {
  const tasks = await getTasks();
  res.send(tasks);
}catch(err){
  console.log(err)
}})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  try {
    const robotsByTask = await getRobotsByTask(id)
    res.send(robotsByTask);
  }catch(err){
    console.log(err);
  }
})

module.exports=router;
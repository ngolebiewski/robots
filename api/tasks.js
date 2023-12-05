const express = require('express');
const router = express.Router();

const { getTasks } = require('../db/tasks.cjs')

router.get('/', async (req, res) =>{
try {
  const tasks = await getTasks();
  res.send(tasks);
}catch(err){
  console.log(err)
}})

module.exports=router;
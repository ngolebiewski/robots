const client = require('./client.cjs');

const createTask = async (taskName) => {
  try {
    const { rows: [task] } = await client.query(
      `INSERT INTO "Tasks" ("TaskName")
        VALUES ('${taskName}')
        RETURNING *;
      `);
    return task;
  } catch (err) {
    console.log(err);
  }
}

const createRobotTask = async (robotID, taskID) => {
  try {
    const { rows: [robotTask] } = await client.query(`
      INSERT INTO "RobotTask" ("RobotID", "TaskID")
      VALUES (${robotID}, ${taskID})
      RETURNING *;
    `)
    return robotTask
  } catch (err) {
    console.log(err);
  }
}

const getTasks = async () => {
  try {
    const { rows } = await client.query(`
    SELECT * FROM "Tasks"
  `);
    return rows;
  } catch (err) {
    console.log(err);
  }
}

// SELECT "Robots"."Name", "Robots"."RobotID"

const getRobotsByTask = async (id) => {
  try {
    const { rows } = await client.query(`
  SELECT * FROM "Robots"
  JOIN "RobotTask" ON "Robots"."RobotID" = "RobotTask"."RobotID"
    WHERE "RobotTask"."TaskID" = ${id};
  `);
  console.log(rows);
    return rows;
  } catch (err) {
    console.log(err);
  }
}



module.exports = {
  createTask,
  createRobotTask,
  getTasks,
  getRobotsByTask
}
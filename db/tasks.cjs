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

module.exports = {
  createTask
}
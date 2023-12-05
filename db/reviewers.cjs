const client = require('./client.cjs');

const createReviewer = async (name, email, phone) => {
  try {
    const { rows: [reviewer] } = await client.query(`
      INSERT INTO "Reviewers" ("ReviewerName", "ReviewerEmail", "ReviewerPhone")
      VALUES ('${name}', '${email}', ${phone})
      RETURNING *;
      `);
    return reviewer;
  } catch (err) {
    console.log(err);
  }
}

const createRobotReviewer = async (robotID, reviewerID) => {
  try {
    const {rows: [robotReview] } = await client.query(`
      INSERT INTO "RobotReviewer" ("RobotID", "ReviewerID")
      VALUES (${robotID}, ${reviewerID})
      RETURNING *;
    `)
    return robotReview
  }catch(err){
    console.log(err);
  }
}

module.exports = {
  createReviewer,
  createRobotReviewer
}
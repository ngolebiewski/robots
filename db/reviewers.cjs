const client = require('./client.cjs');

const createReviewer = async (name, email, phone) => {
  try {
    const { rows: [reviewer] } = await client.query(
      `INSERT INTO "Reviewers" ("ReviewerName", "ReviewerEmail", "ReviewerPhone")
        VALUES ('${name}', '${email}', ${phone})
        RETURNING *;
      `);
    return reviewer;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createReviewer
}
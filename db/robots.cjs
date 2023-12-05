const client = require('./client.cjs');

const createRobot = async (name, modelNumber, company, imageURL, monthsBeforeBreakdown, isSafeAroundChildren, releaseDate) => {
  try {
    const { rows: [robot] } = await client.query(
      `INSERT INTO "Robots" ("Name", "ModelNumber", "Company", "ImageURL", "MonthsBeforeBreakdown", "IsSafeAroundChildren", "ReleaseDate")
        VALUES ('${name}', '${modelNumber}', '${company}', '${imageURL}', ${monthsBeforeBreakdown}, ${isSafeAroundChildren}, '${releaseDate}')
        RETURNING *;
      `);
    return robot;
  } catch (err) {
    console.log(err);
  }
}

const getRobots = async() => {
  try{
  const {rows} = await client.query(`
  SELECT * FROM "Robots";
  `)
  console.log(rows)
  return rows;
  } catch(err){
    console.log(err);
  }
}

module.exports = {
  createRobot,
  getRobots
};
const client = require('./client.cjs');
const { createRobot } = require('./robots.cjs');
const { createReviewer, createRobotReviewer } = require('./reviewers.cjs');
const { createTask, createRobotTask } = require('./tasks.cjs');

const dropTables = async () => {

  try {
    await client.query(`
    DROP TABLE IF EXISTS "RobotTask";
    DROP TABLE IF EXISTS "RobotReviewer";
    DROP TABLE IF EXISTS "Reviewers";
    DROP TABLE IF EXISTS "Tasks";
    DROP TABLE IF EXISTS "Robots";
    `)
  } catch (err) {
    console.log(err);
  }
}

const createTables = async () => {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS "Robots"(
        "RobotID" SERIAL PRIMARY KEY,
        "Name" VARCHAR(50) NOT NULL,
        "ModelNumber" VARCHAR(50) NOT NULL,
        "Company" VARCHAR(50) NOT NULL,
        "ImageURL" VARCHAR(100) NOT NULL,
        "MonthsBeforeBreakdown" INTEGER NOT NULL,
        "IsSafeAroundChildren" BOOLEAN NOT NULL,
        "ReleaseDate" DATE NOT NULL
    );

    CREATE TABLE "Tasks"(
        "TaskID" SERIAL PRIMARY KEY,
        "TaskName" VARCHAR(255) NOT NULL
    );

    CREATE TABLE "Reviewers" (
      "ReviewerID" SERIAL PRIMARY KEY,
      "ReviewerEmail" VARCHAR(100) NOT NULL,
      "ReviewerName" VARCHAR(100) NOT NULL,
      "ReviewerPhone" INTEGER NOT NULL
    );

    CREATE TABLE "RobotReviewer" (
      "RobotID" INTEGER NOT NULL,
      "ReviewerID" INTEGER NOT NULL,
      FOREIGN KEY ("ReviewerID") REFERENCES "Reviewers" ("ReviewerID"),
      FOREIGN KEY ("RobotID") REFERENCES "Robots" ("RobotID")
    );

    CREATE TABLE "RobotTask" (
      "RobotID" INTEGER NOT NULL,
      "TaskID" INTEGER NOT NULL,
      FOREIGN KEY ("TaskID") REFERENCES "Tasks" ("TaskID"),
      FOREIGN KEY ("RobotID") REFERENCES "Robots" ("RobotID")
      );
    `);
  } catch (err) {
    console.log(err);
  }
}

const syncAndSeed = async () => {
  console.log(`I'm the sync and seed function`)

  await client.connect();
  console.log('SUCCESS! Client Connected.');

  await dropTables();
  console.log(`Victory, Tables Dropped`)

  await createTables();
  console.log(`Tables Created`);

  await createRobot('Seer of Truth',	'XBOT-3458-XX-12',	'eXplora-Bots',	'https://patentimages.storage.googleapis.com/27/5b/c5/6d60053f194fc2/US08346390-20130101-D00000.png',	1,	true,	'2012-10-05');
  await createRobot('Flying Robot Legs','XP-123-A','Row Bots Inc','https://patentimages.storage.googleapis.com/7e/aa/8d/a150badc3c2cdb/US11760478-20230919-D00000.png',20,false,'2023-12-04')
  await createRobot('The Humanoid','123-44-32-4','X-humanz','https://patentimages.storage.googleapis.com/b1/d9/74/8b3561d85cad28/112010084595219-pat00003.png',30,true,'2023-10-09');
  await createRobot('Forever Fish','F15h-1000','F1sh-W1sh-1nc','https://patentimages.storage.googleapis.com/c3/67/78/bfd0da248f0ec8/112021111745084-pat00001.png',2,true,'2022-03-23');
  await createRobot('Arm-e','X-12345-1A','X-humanz','https://patentimages.storage.googleapis.com/ee/34/e5/2a21a8f6a9da7c/HDA0003654664630000011.png',4,false,'2020-07-04');
  console.log(`Robots seeds added!`)

  await createReviewer('Walt Wiseman', 'w@notreal.com', 1234567890);
  await createReviewer('Amanda Anagram', 'amanda@hey.com', 1234567890);
  await createReviewer('Betsy Bloomingdale', 'betsy@library.org', 1234567890);
  console.log(`Reviewer Seeds Added`);

  // For...of to loop this simple array for seeding tasks via --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  const tasks = ['Seeing', 'Ikea Furniture Assembly', 'Dishes', 'Dog Walking', 'Flying', 'Human Companionship', 'Underwater Exploration']
  for (const task of tasks) await createTask(task);
  console.log(`Added Tasks`);

  await createRobotReviewer(1,1);
  await createRobotReviewer(2,1);
  await createRobotReviewer(2,3);
  await createRobotReviewer(3,1);
  await createRobotReviewer(3,2);
  await createRobotReviewer(4,1);
  await createRobotReviewer(4,2);
  await createRobotReviewer(4,3);
  console.log('Added Robot Reviews')

  await createRobotTask(1,1);
  await createRobotTask(1,6);
  await createRobotTask(1,2);
  await createRobotTask(1,4);
  //
  await createRobotTask(2,5);
  await createRobotTask(2,2);
  await createRobotTask(2,1);
  //
  await createRobotTask(3,6);
  await createRobotTask(3,2);
  await createRobotTask(3,1);
  //
  await createRobotTask(4,7);
  await createRobotTask(4,1);
  //
  await createRobotTask(5,3);
  await createRobotTask(5,2);
  console.log('seeded RobotTasks!')

  //add client.end statement
  client.end();
}

syncAndSeed();
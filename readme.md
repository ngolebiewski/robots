# Robots Inc.

## a HUMAN making ROBOTS

### Teamwork: Layout Design + Database Design
### Solo: Database, Server (The A.P.I), Then Frontend.

### Deployed on Render
https://robots-t91t.onrender.com/

## API Routes
- /api/v1
  - API is version 1

GET
## /api/v1/robots
  - GET an object with all Robots
    -returns an array wih Robot objects inside
    ```JSON
    [
    {
        "RobotID": 1,
        "Name": "Seer of Truth",
        "ModelNumber": "XBOT-3458-XX-12",
        "Company": "eXplora-Bots",
        "ImageURL": "https://patentimages.storage.googleapis.com/27/5b/c5/6d60053f194fc2/US08346390-20130101-D00000.png",
        "MonthsBeforeBreakdown": 1,
        "IsSafeAroundChildren": true,
        "ReleaseDate": "2012-10-05T04:00:00.000Z"
    },
    {
        "RobotID": 2,
        "Name": "Flying Robot Legs",
        "ModelNumber": "XP-123-A",
        "Company": "Row Bots Inc",
        "ImageURL": "https://patentimages.storage.googleapis.com/7e/aa/8d/a150badc3c2cdb/US11760478-20230919-D00000.png",
        "MonthsBeforeBreakdown": 20,
        "IsSafeAroundChildren": false,
        "ReleaseDate": "2023-12-04T05:00:00.000Z"
      }
    ]
    ```


## /api/v1/tasks
  - GET all Tasks
    - Returns an array with task objects inside
   ```JSON
   [
    {
        "TaskID": 1,
        "TaskName": "Seeing"
    },
    {
        "TaskID": 2,
        "TaskName": "Ikea Furniture Assembly"
    }
   ]
   ```



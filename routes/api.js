const router = require("express").Router();
const db = require("../models");


router.post("/api/workouts", (req, res) => {
    console.log("Adding a new workout")
    
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.put("/api/workouts/:id", (req, res) => {
    const body=req.body
    db.Workout.findByIdAndUpdate(
        req.params.id, 
        {$push: {exercises:body}},
        {new:true,
        runValidators:true}
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
        })
    .catch(err => {
        res.status(400).json(err);
        });
});

router.get("/api/lastworkout", (req, res) => {
    console.log(`getting last workout details:`);
    db.Workout.find()
    .sort({ day: -1 })
    .limit(1)
    .then(dbWorkout => {
      console.log(dbWorkout[0]);
      res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



router.get("/api/workouts/range", ({ body }, res) => {
  db.Workout.find(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



module.exports = router;
let express = require("express");
const router = express.Router();
const ExercisesController = require("../controllers/exercisesController");

router.post("/url_parser", ExercisesController.url_parser);
router.get("/error_alarm", ExercisesController.error_alarm);
router.post("/zoo", ExercisesController.zoo);

module.exports = router;

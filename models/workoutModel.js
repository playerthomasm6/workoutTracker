const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Workout Type is required"
  },

  name: {
    type: String,
    trim: true,
    required: true
  },

  duration: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  sets: {
    type: Number,
    required: true
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
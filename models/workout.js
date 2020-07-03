const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema=new Schema({
  day: { 
    type: Date, 
    default: Date.now 
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "type is Required"
      },
      name: {
        type: String,
        trim: true,
        required: "name is Required"
      },
      distance: {
        type: Number,
        unique: false,
        required: false
      },
      duration: {
        type: Number,
        unique: false,
        required: false
      },
      weight: {
        type: Number,
        unique: false,
        required: false
      },
      reps:{
        type: Number,
        unique: false,
        required: false
      },
      sets:{
        type: Number,
        unique: false,
        required: false
      }
    }] 

}, {
  toObject: {
     virtuals: true
  },
  toJSON: {
     virtuals: true 
  }
});



workoutSchema
.virtual('totalDuration')
.get(function() {
  const total=this.exercises.reduce(function(accumulator,currentValue){
    return accumulator+currentValue.duration
  },0);
  return parseInt(total);
}); 


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


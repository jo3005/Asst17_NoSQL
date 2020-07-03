const API = {
  async getLastWorkout(){
    let res;
    try {
      res=await fetch("/api/lastworkout");
    } catch(err) {
      console.log(err)
    }
    
  const json=await res.json();
  return json[0];  //returns the last workout because the api call returns them in reverse order
  },

  async addExercise(data) {
    //console.log("adding new exercise to existing workout")
    const id = location.search.split("=")[1];
    //console.log(id);
    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },

  
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};

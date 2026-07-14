const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(
  "mongodb://Mahi:mahi123@ac-8zsv7q9-shard-00-00.42ncixy.mongodb.net:27017,ac-8zsv7q9-shard-00-01.42ncixy.mongodb.net:27017,ac-8zsv7q9-shard-00-02.42ncixy.mongodb.net:27017/?ssl=true&replicaSet=atlas-la32m9-shard-0&authSource=admin&appName=Cluster0"
)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));
    app.get("/test",(req,res) => {
        res.send("Hel")
    })
const Team = mongoose.model( "Teams", new mongoose.Schema({

    team_id: String,
    team_name: String,
    team_leader_name: String,
    leader_email: String,
    leader_phone: String,
    college_name: String,
    number_of_members: Number,
    project_title: String,
    problem_statement_track: String,
    technology_stack: String,
    mentor_name: String,
    registration_date: String,
    table_station_number: String
  })
);


app.post("/api/add-team", async (req, res) => {
  try {
    console.log("Received Request");
console.log(req.body);
console.log("Connection State =", mongoose.connection.readyState);

    const team = new Team(req.body);
    const result = await team.save();

    console.log(result);

    res.status(201).json({
      status: "success",
      message: "Team Added Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
});

app.get("/api/view-teams", async (req, res) => {
  try {
    console.log("GET API HIT");

    const teams = await Team.find();

    console.log(teams);

    res.status(200).json({
      status: "success",
      data: teams
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      status: "failed",
      message: error.message
    });
  }
});

app.listen(3000,() => {
    console.log("Server Started")
})


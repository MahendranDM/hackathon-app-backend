const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Mahi:mahi123@cluster0.42ncixy.mongodb.net/hackathondb")
    .then(
        () => {
            console.log("MongoDB Connected")
        }
    ).catch(
        (error) => {
            console.log(error)
        }
    )

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


app.listen(3000,() => {
    console.log("Server Started")
})


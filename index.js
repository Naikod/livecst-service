const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const UserRoute = require("./routes/auth.route")
const RoleRoute = require("./routes/role.route")
const DataRoute = require("./routes/dumpdata.route")

const app = express();

const port = process.env.PORT || 4000

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/livecst', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Database connected"); 
})
.catch((error) => {
  console.error("Database connection error:", error); 
  process.exit(0)
});


app.use(bodyParser.json());

app.use("/auth", UserRoute)
app.use("/controll/role", RoleRoute)
app.use("/api/data/", DataRoute)

app.get("/", (req, res) => {
  res.send("Oh No! You found me!. im just an sleeve to delivering Dumb Data for Livecst!, Great to see you here.")
})


app.listen(port, () => {
  console.log("Backend Server is running on port ", port , "\n Waiting Database connection...");
});

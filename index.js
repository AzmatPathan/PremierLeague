//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const hotelData = require("./modules/League/api");

//set up express app
const app = express();
const port = process.env.PORT || 8888;

//for post operations
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


  
//page routes
app.get("/stat", async (request, response) => {
    let playerStat = await hotelData.getPlayer();
    console.log(playerStat);
    response.render("stat", { title: "Stat", stat: playerStat });
});

app.get("/", async (request, response) => {
    let leagueTable = await hotelData.getTable();
    console.log(leagueTable);
    response.render("index", { title: "Table", league: leagueTable });
});


//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//set up server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
 


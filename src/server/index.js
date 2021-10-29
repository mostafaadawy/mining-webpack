const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const app = express();

app.use(express.static("dist"));
const cors = require("cors");
app.use(cors());
const axios = require("axios");

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/scan/*", async (req, res) => {
  try {
    CLOUDURL = "https://api.meaningcloud.com/sentiment-2.1"; 
    myEnvKey = process.env.API_KEY;
    const txt = req.params[0];
    
    const CloudRES = await axios.get(`${CLOUDURL}?key=${myEnvKey}&txt=${txt}&lang=en`);
    const { agreement, subjectivity, confidence, irony } = CloudRES.data;
    res.send({ agreement, subjectivity, confidence, irony });
  } catch (err) {
    res.status(500).send("Error:" + err);
    console.log({" ::: CATCHED ERROR :::":err});
  }
});
app.listen(8081, function () {
  console.log("Server port 8081!");
});

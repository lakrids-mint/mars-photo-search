const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
//Middleware
app.use(cors());
app.use(bodyParser.json());

//data (not used for now)
let photos = [];

//GET Route (not used for now)
app.get("/photos", (req, res) => {
  res.send("GET request");
  console.log("GET request");
});

//handling the POST route
app.post("/query", (request, response) => {
  //API key (very secret :D
  const key = "t0dfYSC317xnIbjf5TguDANafmhCtnFSnLsdvldI";
  console.log("POST request");

  const body = request.body;

  console.log(
    "will now make API call with following search criteria: ",
    body.sol,
    body.camera
  );
  //Make API call
  axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${
        body.sol
      }&camera=${body.camera}&api_key=${key}`
    )
    //SEND TO CLIENT (works on postman but not in browser)
    .then(res => {
      response.send("result");
      console.log("printing results: ", res.data.photos);
      console.log("printing config: ", res.config, res.status);
    })
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    })
    .finally(console.log("this is the end"));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

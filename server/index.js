const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
//Middleware
app.use(cors());
app.use(bodyParser.json());

//GET Route (not used for now)
app.get("/photos", (req, res) => {
  res.send("GET request");
  console.log("GET request");
});

//handling the POST route
app.post("/query", (request, response) => {
  console.log("POST request");
  //API key (very secret :D
  //const key = "DEMO_KEY";
  const key = "gbbYee9i7MNthwTFhHQFkBssoC6XJrMUF4nz4l0M";

  const body = request.body;
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${
    body.sol
  }&camera=${body.camera}&api_key=${key}`;

  console.log(
    "will now make API call with following search criteria: ",
    "sol: ",
    body.sol,
    "camera",
    body.camera
  );
  //Make API call
  axios
    .get(url)
    //SEND TO CLIENT (works on postman but not in browser)
    .then(res => {
      response.send(res.data);
      console.log(
        "printing config: ",
        "url: ",
        res.config.url,
        "headerS: ",
        res.config.headers,
        "timeout: ",
        res.config.timeout,
        "data: ",
        res.config.data,
        "status: ",
        res.status,
        res.config
      );
    })
    .catch(error => {
      if (error.response) {
        console.log(
          "*********************ERROR RESPONSE**********************************"
        );
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(
          "************************************************************"
        );
      } else if (error.request) {
        console.log(
          "**************************ERROR NO RESPONSE ***************************** "
        );
        console.log(error.request);
        console.log(
          "*****************************************************************"
        );
      } else {
        console.log(
          "*******************ERROR *********************************"
        );
        // Something happened in setting up the request that triggered an Error
        console.log(
          "Error: Something happened in setting up the request that triggered an Error",
          error.message
        );
      }
      console.log(
        "****************ERROR CONFIG***********************************************"
      );
      console.log(error.config);
      console.log(
        "****************ERROR END***********************************************"
      );
    })
    .finally(console.log("api call has finished on the server"));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(
    "*********************************************************************************************************************************"
  );
  console.log(`Server running on port ${PORT}`);
});

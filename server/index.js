//TODO: add pagination
//TODO: add link route to individual images

/* TO DEPLOY:
  - client -> npm run build
  - server -> commit and push to git
  - log in to heroku
  - git push heroku master
*/

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config();
var environment = process.env.NODE_ENV || "development";

//Middleware
app.use(cors());
app.use(bodyParser.json());

//POST route
app.post("/api/photos", (request, response) => {
  //API key (very secret :D
  //const key = process.env.VUE_APP_KEY;
  const key = "gbbYee9i7MNthwTFhHQFkBssoC6XJrMUF4nz4l0M";
  const page = 1;
  const body = request.body;
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${
    body.sol
  }&camera=${body.camera}&page=${page}&api_key=${key}`;
  //half arsed diy validation
  let sol = parseInt(body.sol);
  console.log("is integer?", Number.isInteger(sol));
  if (!Number.isInteger(sol) || body.sol == "" || body.camera == undefined) {
    throw new Error("Please enter valid values");
  } else {
    //Make API call
    axios
      .get(url)
      .then(res => {
        response.send(res.data);
        console.log(
          "encodedUri: ",
          encodeURI(url),
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
          console.log("ERROR RESPONSE> ");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          return error.response;
        } else if (error.request) {
          console.log("ERROR REQUEST:");
          console.log(error.request);
          return error.request;
        } else {
          console.log("OTHER ERRORS: ");
          console.log(error.message);
          return error.message;
        }
      })
      .finally(console.log("code has reached finally statement"));
  }
});
//Handle production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));
  //handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(
    "****************************************************************************************************************"
  );
  console.log(`Server running on port ${PORT}`);
  console.log(environment.NODE);
});

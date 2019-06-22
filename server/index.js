//TODO: deploy and hide API key!
//TODO: pagination-> page	int	1	25 items per page returned

//TODO: handle 0 results -> only show if button clicked
//TODO: loading feature

//TODO: set timeout

//TODO: STYLE
//TODO: make responsive

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

//Middleware
app.use(cors());
app.use(bodyParser.json());

//POST route
app.post("/photos", (request, response) => {
  //API key (very secret :D
  const key = "gbbYee9i7MNthwTFhHQFkBssoC6XJrMUF4nz4l0M";
  const body = request.body;
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${
    body.sol
  }&camera=${body.camera}&page=1&api_key=${key}`;
  //half arsed diy validation
  let sol = parseInt(body.sol);
  console.log("is integer?", Number.isInteger(sol));
  if (!Number.isInteger(sol) || body.sol == "" || body.camera == undefined) {
    console.log("validation not passed");
    throw new Error("Validation failed");
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

const PORT = 3001;
app.listen(PORT, () => {
  console.log(
    "*********************************************************************************************************************************"
  );
  console.log(`Server running on port ${PORT}`);
});

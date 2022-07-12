const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 5000;

app.listen(PORT);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/", async function (req, res) {
  console.log(req.body);
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ status: "실패하였습니다." });
  }
  console.log(req.body);

  const result = await axios.get(req.body.addr).then((result) => {
    console.log(res);
    return res.status(200).send(result);
  });
});

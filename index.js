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
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ status: "실패하였습니다." });
  }
  console.log("body확인");
  console.log(req.body);
  try {
    const data = await axios.get(req.body.addr).then((result) => {
      console.log("result 확인");
      console.log(result.data);
      return res.status(200).send(result.data);
    });
  } catch (error) {
    return res.status(401).send({ data: "실패하였습니다." });
  }
});

app.get("/test", async function (req, res) {
  const data = await axios.get().then((result) => {});
});

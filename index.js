const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 5000;

app.listen(PORT);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 한번만 받기위한 최상위 await
const serverList = (async function () {
  console.log("함수 실행됨");
  let list = [];
  res = await axios.get(
    "https://api.neople.co.kr/df/servers?apikey=cHQkUm6drsWx83fMwYuK1r0E13Wos2j0"
  );
  list = res.data.rows;

  return list;
})();

app.get("/", async function (req, res) {
  console.log(req.body);
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ status: "실패하였습니다." });
  }
  const res = axios.get("");
  console.log(req.body);

  return res.status(200).send({ status: "성공" });
});

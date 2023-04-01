const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const schema = require("../database/database.schema");
const User = schema.user;
app.use(cors());
app.use(express.json());

const db_url =
  "mongodb+srv://hirenkhunt:hiren6351@cluster0.hrfgclf.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("mongo connection success");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(4200, () => {
  console.log("server is running on 4200");
});

app.post("/api/register", async (req, res) => {
  let body = req.body;
  try {
    const user = new User({
      name: body.name,
      email: body.email,
      password: body.password,
    });
    await user.save();
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error" });
  }
});

app.get("/", async (req, res) => {
  res.send("Server started 123");
});

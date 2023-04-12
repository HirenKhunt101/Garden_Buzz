const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const schema = require("../database/database.schema");
const User = schema.user;
app.use(cors());
app.use(express.json());

const seller = require("./seller");

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

const guest = require("./../routes/guest_operation");
app.use("/gardenbuzz", guest);

// app.post("/gardenbuzz/add_seller_detail", async (req, res) => {
//   seller.add_seller_detail(req);
//   res.send("Server started 123");
// });

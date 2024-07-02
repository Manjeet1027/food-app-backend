

/*
// // Immedietly Invoked function expression (IIFE)
//       // (fn{
//       //      })();
//       // so the function can be called without assigning to a variable as to use async-await a function nedd to be created

// const mongoURL = `mongodb://localhost:27017/goFood`;
// (async function mongoDB() {
//   try{
//     await mongoose.connect(mongoURL,{
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log("Connected")
//   }
//   catch(err){
//     console.log("Failed to connect because : ", err)
//   }
// })();
*/


const express = require("express");
const app = express();
const PORT = 5000;
const mongoDB = require("./db");
mongoDB();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));

app.get("/", (req, res) => {
  res.send("HELLO WORLD")
})
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

const express = require("express");
const router = express.Router();

router.post("/fooddata", (req, res) => {
  try{
    res.send([global.food_item, global.foodCategory])
    // console.log("Sent Data")
  }
  catch(err){
    console.error(err)
    res.send("Server Error")
  }
})

module.exports = router
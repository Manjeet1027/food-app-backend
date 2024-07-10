// const mongoose = require("mongoose")

// // const mongoURL = `mongodb://localhost:27017/goFood`;
// // const mongoURL = process.env.MONGO_URL || `mongodb://localhost:27017/goFood`;
// const mongoURL = "mongodb+srv://manjeetkarnwal1027:goFood123@cluster0.stuvh98.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const mongoDB = async() => {
//   try{
//     await mongoose.connect(mongoURL,{
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log("Connected");

//     const foodData = mongoose.connection.db.collection('food_items');
//     const data  = await foodData.find({}).toArray();
//     // console.log(data);
//     global.food_item = data;
//     console.log(global.food_item)

//     const foodCategory = mongoose.connection.db.collection('foodCategory');
//     const catData  = await foodCategory.find({}).toArray();
//     // console.log(catData);
//     global.foodCategory = catData;
//     console.log(global.foodCategory)
//   }
//   catch(err){
//     console.log("Failed to connect because : ", err);
//   }
// }

// module.exports = mongoDB;

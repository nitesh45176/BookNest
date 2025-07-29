import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000 ;

//connect to mongodb
mongoose.connect(process.env.MongoDB_URI, {
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


  //defining routes
  app.use("/books", bookRoute);
  app.use("/user", userRoute);
  

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

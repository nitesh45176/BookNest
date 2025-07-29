import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price:Number,
  category:String,
  title:String,
  image:String
})

const Book = mongoose.model("Book", bookSchema);

export default Book;
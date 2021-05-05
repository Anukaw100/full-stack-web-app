import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";

export const dbURI = process.env.DB_STRING;
const dbOptions = {
  useNewUrlParser:true,
  useUnifiedTopology: true
}
export const connectMongodb = async () => {
  try{
    await mongoose.connect(dbURI, dbOptions)
  } catch(err) {
    throw err;
  }
}

const user = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}, {timestamps: true});

export default mongoose.model("User", user)

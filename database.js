import mongoose from "mongoose";

export const dbURI = process.env.DB_STRING;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const connectMongodb = async () => {
  await mongoose.connect(dbURI, dbOptions);
};

const user = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", user);

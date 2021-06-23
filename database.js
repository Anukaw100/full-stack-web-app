import mongoose from "mongoose";

mongoose.connect(process.env.DB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 60000,
});

export const databaseConnection = mongoose.connection;
databaseConnection.on("disconnecting", (error) =>
  console.log("Disconnecting from database...")
);
databaseConnection.on("disconnected", (error) =>
  console.log("Disconnected from database!")
);
databaseConnection.on("close", (error) =>
  console.log("Successfully closed database connection!")
);

const user = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", user);

import mongoose from "mongoose";

//function to connect to mongodb  datbas
export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("database connected successfully");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}`);
  } catch (error) {
    console.log(error);
  }
};

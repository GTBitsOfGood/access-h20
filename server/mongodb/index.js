import mongoose from "mongoose";
import urls from "../../utils/urls";
import errors from "../../utils/consts";

export default async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose
    .connect(urls.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      dbName: process.env.DB_NAME,
    })
    .catch((error) => {
      console.error(errors.general.DB_CONNECTION);
      throw error;
    });
};

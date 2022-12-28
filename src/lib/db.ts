import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

//@ts-ignore
let cached = global.mongoose as {
  conn: typeof mongoose;
  promise: Promise<typeof mongoose>;
};

if (!cached) {
  //@ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
  };

  cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    mongoose.set("strictQuery", true);    
    return mongoose;
  });

  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;

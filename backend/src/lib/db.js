import dns from "node:dns";
import mongoose from "mongoose";

// Node's resolver often talks to a local IPv6 DNS that refuses SRV lookups
// (querySrv ECONNREFUSED) while system tools like dig still work.
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("Failed to connect to MongoDB: MONGODB_URI is not set.");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri, { family: 4 });
    console.log(`Connected to MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nationwide-trans');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[MESH DB ERROR]: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.log('[MESH DB] Operating in resilient mock-first mode.');
  }
};

export default connectDB;

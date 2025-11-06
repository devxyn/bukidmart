import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Cache the database connection to prevent multiple connections
let cachedConnection = null;

/**
 * Establishes a connection to MongoDB using Mongoose
 * Implements connection caching to prevent multiple connections
 * Sets up connection event listeners for better monitoring
 *
 * @returns {Promise<mongoose.Connection>} The established database connection
 * @throws {Error} If connection fails after retry attempts
 */
const connectDB = async () => {
  // Return cached connection if it exists
  if (cachedConnection) {
    console.log('Using cached database connection');
    return cachedConnection;
  }

  try {
    // Configure connection options
    const options = {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      maxPoolSize: 10, // Maintain up to 10 socket connections
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4, // Use IPv4, skip trying IPv6
    };

    // Establish the connection
    const connection = await mongoose.connect(process.env.MONGODB_URI, options);

    // Cache the connection
    cachedConnection = connection;

    // Set up connection event listeners
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to database');
    });

    mongoose.connection.on('error', (err) => {
      console.error(`Mongoose connection error: ${err}`);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose disconnected from database');
    });

    // Handle application termination
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('Mongoose connection closed due to app termination');
      process.exit(0);
    });

    console.log('Successfully connected to MongoDB');
    return connection;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);

    // Implement retry logic for production environments
    if (process.env.NODE_ENV === 'production') {
      console.log('Attempting to reconnect...');
      // Add a delay before retrying
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return connectDB();
    }

    // Exit the process if not in production
    process.exit(1);
  }
};

export default connectDB;

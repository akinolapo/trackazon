import mongoose from 'mongoose';

let isConnected = false; //Variable to track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MO')
}
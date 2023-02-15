import mongoose from 'mongoose';

const connectDB = (url, callback) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
        .then(callback)
        .catch((error) => console.log(error));
};

export default connectDB;
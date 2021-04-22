import mongoose from 'mongoose'

export async function startConnection() {
    await mongoose.connect('mongodb://localhost/minimo-ea-2021',{
        useNewUrlParser: true,
        useFindAndModify: false ,
        useUnifiedTopology: true,
        useCreateIndex: true 
    });
    console.log('Database is connected');
}
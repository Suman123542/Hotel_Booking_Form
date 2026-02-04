import mongoose from 'mongoose';
export const dbConnection =()=> {
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("database connected Sucessfully")
    }).catch(err=>{
        console.log(`some errot ${err}`)
    })
}
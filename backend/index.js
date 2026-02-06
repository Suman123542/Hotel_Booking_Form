import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './databse/dbConnection.js';
import bookingRouter from './routes/bookingRoute.js'
dotenv.config();
import cors from 'cors';

const app=express();
app.use(cors({
  origin: "https://hotel-booking-form-ui.onrender.com",
}));


app.use(express.json());
app.use(express.urlencoded({extended:true}));

dbConnection();

//route
app.use('/booking',bookingRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
export default app;

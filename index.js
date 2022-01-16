import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import moviesRoutes from './routes/movies.js'
import dotenv from 'dotenv'
import authentication from './routes/auth.js'
dotenv.config() //To loads environment variables 

const app = express()

//middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());


const PORT = process.env.PORT || 4000;

app.use('/auth', authentication);
app.use('/movies', moviesRoutes);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT , () => console.log(`Server on port ${port} and connected to database`)))
    .catch((err)=> console.log(err));


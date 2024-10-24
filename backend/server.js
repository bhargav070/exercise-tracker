const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors({ origin: 'https://exercise-tracker-1-54e9.onrender.com' }));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const authMiddleware = require('./middlewares/authe');

app.use('/auth', authRouter);
app.use('/exercises', authMiddleware, exercisesRouter);
app.use('/users', usersRouter); 

app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
})

var bodyParser = require('body-parser');
const express = require('express');
const mongoose =  require('mongoose');
const app = express();
const User = require('./models/User');
const Post = require('./models/Post');
const keys  = require ('./config/keys')
const passport = require('passport');

const db = keys.mongoURI;
mongoose
.connect(db,{})
.then(()=> console.log("DB Connected"))
.catch(err=> console.log(err))

// Init passport
app.use(passport.initialize());
require('./config/passport')(passport);

// Authe routes
const authRoutes = require('./routes/User');
app.use('/auth',authRoutes);


app.use(bodyParser.urlencoded({extended: false}));

//User routes
const userRoutes = require('./routes/User');
app.use('/users', passport.authenticate('jwt', {session: false}), userRoutes);


// Post routes
const postRoutes = require('./routes/Post');
app.use('/post',passport.authenticate('jwt', {session: false}), postRoutes);




/* GET home page. */
app.get('/', (req,res) => res.json({
	msg: "Hello! amigo!!"
}));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
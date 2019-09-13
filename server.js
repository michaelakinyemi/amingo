var bodyParser = require('body-parser');
const express = require('express');
const mongoose =  require('mongoose');
const app = express();
const User = require('./models/User');
const Post = require('./models/Post');
const db = "mongodb+srv://atrolabs:makeithappen@cluster0-yti0i.mongodb.net/test?retryWrites=true&w=majority"
mongoose
.connect(db,{})
.then(()=> console.log("DB Connected"))
.catch(err=> console.log(err))

app.use(bodyParser.urlencoded({extended: false}));

//User routes
const userRoutes = require('./routes/User');
app.use('/users', userRoutes);
// Post routes
const postRoutes = require('./routes/Post');
app.use('/post', postRoutes);




/* GET home page. */
app.get('/', (req,res) => res.json({
	msg: "Hello! amigo!!"
}));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
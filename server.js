const express = require('express') // require the express package
const app = express() // initialize your express app instance
 
const cors = require('cors');

app.use(cors()) // after you initialize your express app instance
app.use(express.json());
require('dotenv').config();
const port=process.env.PORT;


const {base,getData,addData,getFavorite,deleteFavorite,updateFavorite}=require('./controller/base.controller')




const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});












app.get('/',base)
app.get('/data',getData)
app.post('/data',addData)
app.get('/favorite',getFavorite)
app.delete('/favorite/:name',deleteFavorite)
app.put('/favorite/:name',updateFavorite)
 
app.listen(port) // kick start the express server to work


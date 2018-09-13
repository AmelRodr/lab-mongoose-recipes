const mongoose = require('mongoose');
const express = require('express')
const Schema   = mongoose.Schema;
const data = require('./data.js')
const Recipe = require('./models/Recipe')

const app = express()

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });
  
app.use('/new',(req,res)=>{
  Recipe.create({
    title: 'tamales',
    level: 'UltraPro Chef',
    ingredients: ['maiz','pollo','salsa'],
    cousine: 'mexican',
    dishType: 'breakfast',
    duration: 4,
    creator: 'aztecas'
  })
})

app.get('/newMenu',(req,res)=>{
  Recipe.insertMany(data)
  .then(res=>{
    console.log(recipes.title)
  })
  .catch()
})

app.get('/update/:id',(req,res)=>{
  Recipe.findByIdAndUpdate(req.params.id,{duration:100})
  console.log('Exito')
})

app.get('/:id/delete',(req,res)=>{
  Recipe.findByIdAndRemove(re.params.id)
  console.log('borrado')
})

app.listen(3100,()=>{
  console.log('escuchando')
})

// import modules

import express from 'express'

// create Express app

const app = express()

// configure the app (app.set)



// mount Middleware (app.use)



// mount routes
app.get('/', function(req,res){
  res.send('<h1>hello Express</h1>')
})


// tell the app to listen on port 3000

app.listen(4000, function() {
  console.log('Listening on port 4000')
})
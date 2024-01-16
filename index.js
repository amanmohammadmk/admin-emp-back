// import .env file

require('dotenv').config()

// import connection.js for connecting node and mongodb

require('./DB-connection/connection')

//import express package

const express = require('express')

// importing router

const router=require('./Routes/router')

// import cors

const cors = require('cors')


// create server using express

const emsserver=express()

// use cors in server app

emsserver.use(cors())



// parse json data using server

emsserver.use(express.json())

// using router
emsserver.use(router)

emsserver.use('/uploads',express.static('./uploads'))

// customize port for server

const PORT=4000||process.env.PORT

// to run server app use listen() method as call back

emsserver.listen(PORT,()=>{
    console.log(`ems server started at port : ${PORT}`);
})


//  to resolve requset from front end

emsserver.post('/',(req,res )=>{
    res.send(`<h1>ems server started at port 4000</h1>`)
})





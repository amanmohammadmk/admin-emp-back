// to handle request from frontend


// importing express
const express=require('express')


// import user controller for adding /add path to addUser
const userController=require('../controllers/userController')

const multerConfig=require('../middleware/multermiddileware')



// using express create an object for router class
const router= new express.Router()


// path to handle request from frontend
// for adding /add path to addUser

router.post('/login', userController.login)


router.post('/add', multerConfig.single("profile"),userController.addUser)



router.get('/get/allusers',userController.getallUsers)


// delete

router.delete('/delete/user/:id',userController.deleteUser)

// edit

router.put('/edit/user/:id',multerConfig.single("profile"),userController.editUser)

module.exports=router


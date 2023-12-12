const express=require('express')

//router object
const router=new express.Router()


//import userControll
const user=require('../Controllers/userControll')

//import middleware
const upload=require('../middlewares/multerMiddleware')

const { jwtMiddleware } = require('../middlewares/jwtmiddleware')

//sign up
router.post('/user/register',user.register)

//login
router.post('/user/login',user.login)
// router.post('user/login',user.login)

//update profile                      //,jwtMiddleware
router.put('/user/update-profile/:_id',jwtMiddleware,upload.single('profile'),user.editProfile)

//add new project
router.post('/user/add-project',jwtMiddleware,upload.single('projectImage'),user.addProject)

//get user  projects
router.get('/user/get-user-projects/:id',jwtMiddleware,user.getUserProjects)



//get all projects
router.get('/user/get-all-projects',user.getAllprojects)


// get 3 of all projects  - home projects
router.get('/user/get-home-projects',user.getHomeprojects)

//edit project
router.put('/user/edit-project/:_id',jwtMiddleware,upload.single('projectImage'),user.editProject)

//delete project
router.delete('/user/delete-project/:_id',jwtMiddleware,user.deleProject)


module.exports=router
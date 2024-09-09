import express from 'express'
import{getUsers,insertUser,getUser,updateUser,deleteUser, loginUser } from '../controller/usersController.js'
import { checkUser, verifyAToken } from '../middleware/authenticate.js'

const userRouter = express.Router()

userRouter.get('/', getUsers)
userRouter.get('/:id', getUser)
userRouter.post('/register', insertUser)
userRouter.patch('/update/:id', updateUser)
userRouter.delete('/delete/:id', deleteUser)
userRouter.post('/login', loginUser)


export{userRouter}
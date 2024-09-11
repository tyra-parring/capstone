import express from 'express'
import { getUsers, insertUser, getUser, updateUser, deleteUser, loginUser } from '../controller/usersController.js'
import { checkUser, verifyAToken } from '../middleware/authenticate.js' 
import { fetchCarts, fetchuserCart, fetchadduserCart, fetchupdateUserCart, deleteCart, deleteItem } from '../model/cartDb.js'

const userRouter = express.Router()

userRouter.get('/', getUsers)
userRouter.get('/singleUser/:id', getUser)
userRouter.post('/register', insertUser)
userRouter.patch('/update/:id', updateUser)
userRouter.delete('/delete/:id', deleteUser)
userRouter.post('/login', loginUser)

userRouter.get('/carts', fetchCarts)
userRouter.get('/:id/cart', fetchuserCart)
userRouter.post('/:id/cart', fetchadduserCart)
userRouter.patch('/:id/cart/:prodID', fetchupdateUserCart)
userRouter.delete('/:id/cart', deleteCart)
userRouter.delete('/:id/cart/:prodID', deleteItem)

export { userRouter }
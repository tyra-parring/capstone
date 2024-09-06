import express from 'express'

import { getProducts, getProduct ,addProduct, deleteProduct, updateProduct} from '../controller/productsController.js'

const productRouter = express.Router()

productRouter.get('/', getProducts)
productRouter.get('/:id', getProduct)
productRouter.get('/:id', addProduct)
productRouter.delete('/delete/:id', deleteProduct)
productRouter.patch('/update/:id', updateProduct);

export {productRouter}
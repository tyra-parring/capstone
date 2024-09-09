import express from 'express'

import { getProducts, getProduct ,addProduct, deleteProduct, updateProduct} from '../controller/productsController.js'

const productRouter = express.Router()

productRouter.get('/', getProducts)
productRouter.get('/:id', getProduct)
productRouter.post('/:id', addProduct)
productRouter.delete('/:id', deleteProduct)
productRouter.patch('/:id', updateProduct);

export {productRouter}
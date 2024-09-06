import { getProductsDb, getProductDb,addproductDb, deleteProductDb, updateProductDb} from "../model/productsDb.js";

const getProducts = async (req, res) => {
    try {
      const products = await getProductsDb();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching items' });
    }
  };

  const getProduct = async (req, res) => {
    try {
      const product = await getProductDb(req.params.id);
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.json(product)
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching item' });
    }
  };

  const addProduct = async (req, res) => {
    try {
      const {name, description, material, price, stock, image_url } = req.body;
      const newproduct = await addproductDb(name, description, material, price, stock, image_url);
      res.json(newproduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding product' });
    }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduct = await deleteProductDb(id);
    if (!deletedProduct) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json({ message: 'Product deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting product' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, material, price, stock, image_url } = req.body;
    const updatedProduct = await updateProductDb(id, name, description, material, price, stock, image_url);
    if (!updatedProduct) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json({ message: 'Product updated successfully'});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating product' });
  }
};

  export {getProducts, getProduct,addProduct, deleteProduct, updateProduct}
import { pool } from "../config/config.js";

const getProductsDb = async()=>{
    try {
        let [data] = await pool.query('SELECT * FROM Products');
        return data;
      } catch (error) {
        console.error("Error fetching products:", error);
        return null;
      }
    };

    const getProductDb = async (id) =>{
        try {
            let [data] = await pool.query(
                'SELECT * FROM Products WHERE prodID = ?', [id]);
            if (!data) {
              return null
            }
            return data;
          } catch (error) {
            console.error("Error fetching product:", error);
            return null;
          }
    }

    const addproductDb = async (name, description, material, price, stock, image_url) => {
        try {
          await pool.query(`
            INSERT INTO Products (name, description, material, price, stock, image_url)
            VALUES (?,?,?,?,?,?)
            `, [name, description, material, price, stock, image_url]);
          return { message: 'Item added successfully' };
        } catch (error) {
          console.error("Error adding product:", error);
          return { message: 'Error adding item' };
        }
    };

    const deleteProductDb = async (id) => {
      try {
        let result = await pool.query('DELETE FROM Products WHERE prodID = ?', [id]);
        if (result.affectedRows > 0) {
          return { message: 'Product deleted successfully' };
        } else {
          return { message: 'Product not found' };
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        return { message: 'Error deleting product' };
      }
    };
    
    const updateProductDb = async (id, name, description, material, price, stock, image_url) => {
      try {
        let result = await pool.query(`
          UPDATE Products
          SET name = ?, description = ?, material = ?, price = ?, stock = ?, image_url = ?
          WHERE prodID = ?
        `, [name, description, material, price, stock, image_url, id]);
        if (result.affectedRows > 0) {
          return { message: 'Product updated successfully' };
        } else {
          return { message: 'Product not found' };
        }
      } catch (error) {
        console.error("Error updating product:", error);
        return { message: 'Error updating product' };
      }
    };

export {getProductsDb, getProductDb, addproductDb,  deleteProductDb, updateProductDb};

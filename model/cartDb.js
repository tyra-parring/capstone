import { pool } from '../config/config.js';

const fetchCarts = async (req, res) => {
  try {
    const strQry = `
      SELECT distinct c.usersID, CONCAT(u.firstName, '', u.lastName) AS fullName,
          group_concat(DISTINCT p.name) 'Product',
          sum(p.price * c.quantity)  'Total Price',
          sum(c.quantity) 'quantity'  
      FROM Carts c
      JOIN users u ON c.usersID = u.usersID
      JOIN Products p ON c.prodID = p.prodID
      group by c.usersID;
    `;
    const [results] = await pool.query(strQry);
    res.json({
      status: res.statusCode,
      results
    });
  } catch (e) {
    res.json({
      status: 404,
      msg: e.message
    });
  }
}
const fetchuserCart = async (req, res) => {
  try {
    const strQry = `
      SELECT c.usersID, u.userName AS fullName,
          p.prodID,
          p.name 'Product',
          p.price * c.quantity  'Total Price',
          c.quantity 'quantity'
      FROM Carts c
      JOIN users u ON c.usersID = u.usersID
      JOIN Products p ON c.prodID = p.prodID
      WHERE c.usersID = ?;
    `;
    const [results] = await pool.query(strQry, [req.params.id]);
    res.json({
      status: res.statusCode,
      results
    });
  } catch (e) {
    res.json({
      status: 404,
      msg: e.message
    });
  }
}
const fetchadduserCart = async (req, res) => {
  try {
    const strQry = `
      INSERT INTO Carts
      (usersID, prodID, quantity)
      VALUES (?, ?, ?);
    `;
    await pool.query(strQry, [req.params.id, req.body.prodID, req.body.quantity]);
    res.json({
      status: res.statusCode,
      msg: 'Added to cart'
    });
  } catch (e) {
    res.json({
      status: 404,
      msg: e.message
    });
  }
}
const fetchupdateUserCart = async (req, res) => {
  try {
    const strQry = `
      UPDATE Carts
      SET quantity = ?
      WHERE prodID = ? AND usersID = ?;
    `;
    const [result] = await pool.query(strQry, [req.body.quantity, req.params.prodID, req.params.id]);
    if (result.affectedRows > 0) {
      res.json({
        status: res.statusCode,
        msg: 'The quantity has been updated. Aragato:grin:'
      });
    } else {
      res.json({
        status: 404,
        msg: 'Cart item not found'
      });
    }
  } catch (e) {
    res.json({
      status: 404,
      err: e.message
    });
  }
}
const deleteItem = async (req, res) => {
  try {
    const strQry = `
      DELETE FROM Carts
      WHERE prodID = ? AND usersID = ?;
    `;
    const [result] = await pool.query(strQry, [req.params.prodID, req.params.id]);
    if (result.affectedRows > 0) {
      res.json({
        status: res.statusCode,
        msg: 'An item was removed'
      });
    } else {
      res.json({
        status: 404,
        msg: 'Item not found'
      });
    }
  } catch (e) {
    res.json({
      status: 404,
      err: e.message
    });
  }
}
const deleteCart = async (req, res) => {
  try {
    const strQry = `
      DELETE FROM Carts
      WHERE usersID = ?;
    `;
    const [result] = await pool.query(strQry, [req.params.id]);
    if (result.affectedRows > 0) {
      res.json({
        status: res.statusCode,
        msg: 'A cart was removed'
      });
    } else {
      res.json({
        status: 404,
        msg: 'Cart not found'
      });
    }
  } catch (e) {
    res.json({
      status: 404,
      err: e.message
    });
  }
}
export {
  fetchCarts,
  fetchuserCart,
  fetchadduserCart,
  fetchupdateUserCart,
  deleteItem,
  deleteCart
}






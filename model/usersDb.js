import { pool } from '../config/config.js';
import { hash } from 'bcrypt';

const getUsersDb = async () => {
  try {
    const [data] = await pool.query('SELECT * FROM users');
    return data;
  } catch (error) {
    throw error;
  }
};

const getUserDb = async (emailAdd) => {
  try {
    const [[data]] = await pool.query('SELECT * FROM users WHERE emailAdd = ?', [emailAdd]);
    return data;
  } catch (error) {
    throw error;
  }
};

const getUserIdDb = async (id) => {
  try {
    const [[data]] = await pool.query('SELECT * FROM users WHERE usersID = ?', [id]);
    return data;
  } catch (error) {
    throw error;
  }
};

// const insertUserDb = async (firstName, lastName, userAge, gender, userRole, userEmail, userPass, userProfile) => {
//     try {
//       const hashedPass = await hash(userPass, 10);
//       const query = "INSERT INTO users (firstName, lastName, userAge, gender, userRole, userEmail, userPass, userProfile) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
//       const values = [firstName, lastName, userAge, gender, userRole, userEmail, hashedPass, userProfile];
//       await pool.query(query, values);
//     } catch (error) {
//       throw error;
//     }
//   };

const insertUserDb = async (firstName, lastName, userAge, gender, userRole, userEmail, userPass, userProfile) => {
    try {
      const hashedPass = await hash(userPass, 10);
      const query = "INSERT INTO users (firstName, lastName, userAge, gender, userRole, userEmail, userPass, userProfile) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [firstName, lastName, userAge, gender, userRole, userEmail, hashedPass, userProfile];
      const result = await pool.query(query, values);
      const insertedUser = {
        id: result[0].insertId,
        firstName,
        lastName,
        userAge,
        gender,
        userRole,
        userEmail,
        userProfile,
      };
      return insertedUser;
    } catch (error) {
      throw error;
    }
  };

const deleteUserDb = async (userID) => {
  try {
    await pool.query('DELETE FROM users WHERE usersID = ?', [userID]);
  } catch (error) {
    throw error;
  }
};

const updateUserDb = async (firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, id) => {
  try {
    await pool.query(
      `UPDATE users SET firstName = ?, lastName = ?, userAge = ?, gender = ?, userRole = ?, emailAdd = ?, userPass = ?, userProfile = ? WHERE usersID = ?`,
      [firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, id]
    );
  } catch (error) {
    throw error;
  }
};

export { getUsersDb, getUserDb, getUserIdDb, insertUserDb, deleteUserDb, updateUserDb };

import { getUsersDb, getUserIdDb, insertUserDb, deleteUserDb, updateUserDb } from '../model/usersDb.js';
import { hash } from 'bcrypt';

const getUsers = async (req, res) => {
  try {
    const users = await getUsersDb();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

// const getUser = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await getUserIdDb(id);
//     if (!user) {
//       res.status(404).json({ message: 'User not found' });
//     } else {
//       res.json(user);
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching user' });
//   }
// };

const getUser =  async(req,res)=>{
    res.json(await getUserIdDb(req.params.id))
}

// const insertUser = async (req, res) => {
//   try {
//     const { firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile } = req.body;
//     const hashedPass = await hash(userPass, 10);
//     await insertUserDb(firstName, lastName, userAge, gender, userRole, emailAdd, hashedPass, userProfile);
//     res.json({ message: 'User created successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating user' });
//   }
// };

const insertUser = async (req, res) => {
  try {
    console.log('Received request body:', req.body);
    const { firstName, lastName, userAge, gender, userRole, userEmail, userPass, userProfile } = req.body;
    console.log('Extracted user data:', { firstName, lastName, userAge, gender, userRole, userEmail, userPass, userProfile });
    const hashedPass = await hash(userPass, 10);
    console.log('Hashed password:', hashedPass);
    const result = await insertUserDb(firstName, lastName, userAge, gender, userRole, userEmail, hashedPass, userProfile);
    console.log('Result of insertUserDb:', result);
    if (result) {
      res.json({ message: 'User created successfully' });
    } else {
      res.status(500).json({ message: 'Error creating user' });
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteUserDb(id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile } = req.body;
    const user = await getUserIdDb(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      const updatedUser = {
        firstName: firstName || user.firstName,
        lastName: lastName || user.lastName,
        userAge: userAge || user.userAge,
        gender: gender || user.gender,
        userRole: userRole || user.userRole,
        emailAdd: emailAdd || user.emailAdd,
        userPass: userPass ? await hash(userPass, 10) : user.userPass,
        userProfile: userProfile || user.userProfile,
      };
      await updateUserDb(updatedUser.firstName, updatedUser.lastName, updatedUser.userAge, updatedUser.gender, updatedUser.userRole, updatedUser.emailAdd, updatedUser.userPass, updatedUser.userProfile, id);
      res.json({ message: 'User updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
  }
};

const loginUser = async (req, res) => {
  res.header('Set-Cookie', `authToken=${req.body.token}; Max-Age=3600000; Secure; SameSite=Strict`);
  res.json({
    message: 'You logged in successfully',
    token: req.body.token
  });
};

export { getUsers, getUser, insertUser, deleteUser, updateUser, loginUser};
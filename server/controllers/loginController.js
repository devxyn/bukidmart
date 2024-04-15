import User from '../models/User.js';

const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: 'Invalid email!',
      });
    }

    const passwordMatch = password === user.password;

    if (!passwordMatch) {
      return res.status(400).json({
        message: 'Incorrect password!',
      });
    }
    return res.status(200).json({
      message: 'Login successful!',
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!', error: error.message });
  }
};

export default loginController;

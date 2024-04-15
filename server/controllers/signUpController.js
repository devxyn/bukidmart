import User from '../models/User.js';

const signUpController = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
    });

    res.status(201).json({
      message: 'Signup Successfully',
      user: { email: user.email, password: user.password, firstName: user.firstName, lastName: user.lastName },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to sign up.',
    });
  }
};

export default signUpController;

const loginController = (req, res) => {
  const { email, password } = req.body;

  const user = { email: 'test@test.com', password: '123123123' };

  try {
    if (user.email !== email) {
      res.status(500).json({ message: 'Invalid credentials' });
    }

    if (user.password !== password) {
      res.status(500).json({ message: 'Incorrect password.' });
    }

    res.status(200).json({ message: 'Login successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

export default loginController;

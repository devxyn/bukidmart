const signUpController = (req, res) => {
  const { email, password } = req.body;

  try {
    res.status(201).json({
      message: 'Signup Successfully',
      user: { email, password },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

export default signUpController;

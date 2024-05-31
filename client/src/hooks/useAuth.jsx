const useAuth = () => {
  const userID = window.localStorage.getItem('userID');
  const isAdmin = window.localStorage.getItem('isAdmin');

  const user = { userID, isAdmin: isAdmin === 'true' };

  return user;
};

export default useAuth;

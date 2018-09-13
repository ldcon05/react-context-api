
const setLoggedUser = (user) => {
  localStorage.setItem('loggedUser', JSON.stringify(user));
};

const getLoggedUser = () => localStorage.getItem('loggedUser');

const logout = () => {
  localStorage.removeItem('loggedUser');
};

export { setLoggedUser, getLoggedUser, logout }
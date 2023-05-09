export function isAuthenticated() {
  // Check if the user is authenticated
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  return token !== null;
}

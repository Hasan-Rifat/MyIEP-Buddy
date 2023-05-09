export function isAuthenticated() {
    // Check if the user is authenticated
    const token = localStorage.getItem('token');

    return token !== null;
}
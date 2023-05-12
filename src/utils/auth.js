export function getToken() {
    return localStorage.getItem('authToken');
}

export function saveToken(token) {
    localStorage.setItem('authToken', token);
}

export function deleteToken() {
    localStorage.removeItem('authToken');
}
export function isAuth() {
    return localStorage.getItem('authToken') !== null;
}

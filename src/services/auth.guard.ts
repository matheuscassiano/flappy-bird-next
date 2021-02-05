export default function routeGuard() {
    const token = localStorage.getItem('token') || null;
    if (token) {
        return { accept: true, message: 'Congratulations' }
    } else {
        return { accept: false, message: 'Refused' }
    }
}
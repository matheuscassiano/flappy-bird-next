export default async function serviceLogin(email: string, password: string) {
    const Header = new Headers();
    Header.append('Content-Type', 'application/json');

    const response: any = fetch('http://localhost:3100/auth/login', {
        method: 'POST',
        headers: Header,
        body: JSON.stringify({ email, password })
    })
    .then(response => {return response.json()})
    .then(res => res)
    .catch(error => console.warn(error))

    return response
}
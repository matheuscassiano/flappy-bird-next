export default async function serviceRegisterPointes(email: string, token: string) {
    const Header = new Headers();
    Header.append('Content-Type', 'application/json');
    Header.append('Authoriaztion', `Bearer ${token}`);

    const response: any = await fetch('http://localhost:3100/user/email', {
        method: 'GET',
        headers: Header,
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(res => res)
    .catch(error => console.warn(error))

    return response
}
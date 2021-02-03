export default async function serviceRegisterPointes(email: string, points: number, token: string) {
    const Header = new Headers();
    Header.append('Content-Type', 'application/json');
    Header.append('Authoriaztion', `Bearer ${token}`);

    const response: any = await fetch('http://localhost:3100/points', {
        method: 'POST',
        headers: Header,
        body: JSON.stringify({ email, points })
    })
    .then(response => response.json())
    .then(res => res)
    .catch(error => console.warn(error))

    console.log(response)
    return response
}
export async function getUser(userId) {
    const res = await fetch(`https://localhost8080/api/users/${userId}`)
    return await res.json();
}

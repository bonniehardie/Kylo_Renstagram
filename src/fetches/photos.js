export async function getPhotos(userId) {
    const res = await fetch(`http://localhost:8080/api/photos/${userId}`)
    return await res.json();
}

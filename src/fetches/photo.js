export async function getPhoto(photoId) {
    const res = await fetch(`https://localhost8080/api/photos/photo/${photoId}`)
    return await res.json();
}

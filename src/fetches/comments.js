export async function getComments(photoId) {
    const res = await fetch(`https://localhost8080/api/comments/${photoId}`)
    return await res.json();
}

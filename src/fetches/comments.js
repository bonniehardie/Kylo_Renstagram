export const getComments = (photoId) => async(dispatch) => {
    const res = await fetch(`https://localhost8080/api/comments/${photoId}`)
    const comments = await res.json();
    dispatch(getPostComments(comments))
}
const PostComments = (comments) => ({ type: 'GET_COMMENTS', comments})
// action

// reducer



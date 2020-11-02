import { POST_COMMENT } from "../actions/comments";

export default function reducer(state = {}, action) {
    switch (action.type) {
        case POST_COMMENT: {
            return {
                ...state,
                comment: action.comment,
            };
        }

        default:
            return state;
    }
}

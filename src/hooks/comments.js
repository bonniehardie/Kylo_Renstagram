import { useState } from 'react';
import useAsyncEffect from './useAsyncEffect';
import { getComments } from '../fetches/comments';

export const useComments = () => {
    const [comments, setComments] = useState([]);
    useAsyncEffect(async() => {
        setComments(await getComments());
    },[]);
    return comments;
}

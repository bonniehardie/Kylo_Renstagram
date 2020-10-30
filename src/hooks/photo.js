import { useState } from 'react';
import useAsyncEffect from './useAsyncEffect';
import { getPhoto } from '../fetches/photo';

export const usePhotos = () => {
    const [photo, setPhoto] = useState([]);
    useAsyncEffect(async() => {
        setPhoto(await getPhoto());
    },[]);
    return photo;
}

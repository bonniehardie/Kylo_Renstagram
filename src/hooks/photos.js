import { useState } from 'react';
import useAsyncEffect from './useAsyncEffect';
import { getPhotos } from '../fetches/photos';

export const usePhotos = (userId) => {
    const [photos, setPhotos] = useState([]);
    useAsyncEffect(async() => {
        setPhotos(await getPhotos(userId));
    },[]);
    console.log(photos)
    return photos;
}

import { useState } from 'react';
import useAsyncEffect from './useAsyncEffect';
import { getCats } from '../routes/api/photos';

export const usePhotos = () => {
    const [photos, setPhotos] = useState([]);
    useAsyncEffect(async() => {
        setPhotos(await getPhotos());
    },[]);
    return photos;
}

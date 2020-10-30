import { useState } from 'react';
import useAsyncEffect from './useAsyncEffect';
import { getUser } from '../fetches/user';

export const useUser = () => {  
    const [user, setUser] = useState([]);
    useAsyncEffect(async() => {
        setUser(await getUser());
    },[]);
    return user;
}

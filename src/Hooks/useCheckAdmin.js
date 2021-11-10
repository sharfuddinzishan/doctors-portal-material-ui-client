import axios from 'axios';
import { useState, useEffect } from 'react';

export const useCheckAdmin = (email) => {
    const [adminStatus, setAdminStatus] = useState(false);
    const [userStatus, setUserStatus] = useState(false);
    const [userExist, setUserExist] = useState(false);
    const [loader, setLoader] = useState();
    useEffect(() => {
        setLoader(true);
        let url = `http://localhost:4000/users?email=${email}`;
        axios.get(url)
            .then(result => {
                if (result?.data?.role === 'admin') {
                    setAdminStatus(true)
                    setUserExist(true)
                }
                else if (result?.data?.role === 'user') {
                    setUserStatus(false)
                    setUserExist(true)
                }
                else {
                    setUserExist(false)
                }
            })
            .catch(e => { })
            .finally(() => { setLoader(false) });
    }, [email])
    return [adminStatus, setAdminStatus, userStatus, setUserStatus, userExist, setUserExist]
}

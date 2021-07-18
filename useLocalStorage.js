import { useState, useEffect } from 'react'
//localStorage.setItem('myCat', 'Tom');
//let cat = localStorage.getItem('myCat');
//localStorage.removeItem('myCat');
//localStorage.clear();
//const [item,setItem] = useLocationStorage(iniValue)
//
export function useLocationStorage(key = 'default', value = '') {
    const [v, setv] = useState(value)
    const setValue = (v1) => {
        localStorage.setItem(key, v1)
        setv(v1)
    }
    useEffect(() => {
        localStorage.setItem(key, value)
    }, [key, value])
    return [v, setValue]
}
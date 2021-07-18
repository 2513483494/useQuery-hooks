import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = (url, data1 = {}, type = 'GET') => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        let promise
        // 1. 执行异步ajax请求
        if (type === 'GET') { // 发GET请求
            promise = axios.get(url, { // 配置对象
                params: data1 // 指定请求参数
            })
        } else { // 发POST请求
            promise = axios.post(url, data1)
        }
        promise.then(response => {
            setData(response.data)
        }).catch(error => {
            setError(error);
        }).finally(() => setLoading(false))
    }, [url, type])
    return { loading, error, data };
}

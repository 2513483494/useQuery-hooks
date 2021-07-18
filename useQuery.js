import { useState, useEffect } from 'react'

//query为参数键值对象
export function useQuery() {
    const [query, setQueryObject] = useState('');
    const mapParamsToQuery = () => {
        const queryObject = {}
        const paramsString = window.location.href.indexOf('?') === -1 ? '' : window.location.href.slice(window.location.href.indexOf('?') + 1)
        const paramsList = paramsString.split('&')
        paramsList.forEach((item) => {
            const key = item.slice(0, item.indexOf('='))
            const value = item.slice(item.indexOf('=') + 1)
            const query = {
                [key]: value
            }
            Object.assign(queryObject, query)
        })
        setQueryObject(queryObject)
    }

    // 刷新页面重置query
    useEffect(() => {
        mapParamsToQuery()
    }, [])
    const format = (obj) => {
        let str = '?'
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                str = `${str}${i}=${obj[i]}&`
            }
        }
        return str
    }
    const setQuery = (obj) => {
        window.location.href = window.location.href.indexOf('?') === -1 ?
            window.location.href + format(obj) :
            window.location.href.slice(0, window.location.href.indexOf('?')) + format(obj);
        window.location.href = window.location.href.slice(0, window.location.href.length - 1)
        mapParamsToQuery()
    }

    return [query, setQuery]
}

# useQuery-hooks
自定义useQuery，让你方便从query中获取参数或者传递参数，用于表单
使用方法：
```javascript
import { useQuery } from './xxx'
...
// query是当前url中的所有参数，以对象的格式返回，setQuery需要传递参数对象进去
const [query, setQuery] = useQuery()
// 取参数，一般用于参数回填
const { name, age } = query
form.setFieldsValue({
    name,
    age,
})
// 设置参数，像query中放置参数
const { name, age } = form.getFieldsValue(['name', 'age'])
setQuery({ name, age })

```
在个人博客有详细说明
https://2513483494.github.io/2021/07/18/%E8%87%AA%E5%AE%9A%E4%B9%89hook-useQuery%E7%AE%80%E5%8D%95%E5%AE%9E%E7%8E%B0/
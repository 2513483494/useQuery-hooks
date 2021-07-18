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

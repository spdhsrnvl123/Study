## ✍ useParams

`useParams`후크는 일치된 현재 URL에서 동적 매개변수의 키/값 쌍의 개체를 반환한다. `<Route path>`. 자식 경로는 부모 경로에서 모든 매개변수를 상속한다.

```jsx
import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function ProfilePage(){
    let { userId } = useParams();
}

function App(){
    return(
        <Routes>
            <Route path ="users">
                <Route path =":/userId" element = {<Profilepage />} />
                <Route path = "me" element ={...} />
            </Route>
        </Routes>
    )
}
```

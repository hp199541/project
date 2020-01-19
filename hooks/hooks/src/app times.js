import React, {useState, useEffect} from 'react'
import {HashRouter as Router, Route,Link} from 'react-router-dom'
// import Index from './components/index'
// import List from './components/list'
// 类似于Index组件
function Index () {
    useEffect(()=>{
        console.log('index来了')
        return ()=>{
            console.log('index走了')
        }
    },[])
    return <h2>首页</h2>
}
function List () {
    useEffect(()=>{
        console.log('list')
    })
    return <h2>列表</h2>
}
export default function Example () {
    const [count, setCount] = useState(1) //0代表初始值
    useEffect(()=>{
        return ()=>{
            console.log('=======')
        }
    },[count])//第二个参数传入count,当其状态发生变化时才能执行usereffect
    return (
        <div>
            <span>点击了{count}次</span>
            <button onClick = {()=>{setCount(count+1)}}></button>
            <Router>
                <ul>
                    <Link to='/index'>首页</Link>
                    <Link to='/list'>列表</Link>
                </ul>
                
                <Route path='/list' component={List}></Route>
                <Route path='/index' component={Index}></Route>
            </Router>
        </div>
    )
}
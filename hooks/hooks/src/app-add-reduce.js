import React, {useReducer} from 'react'
function ReducerDemo () {
    const [count, dispatch] = useReducer((state = 0,action) => {
        switch(action){
            case 'add':
                return state + 1
            case 'reduce':
                return state - 1
            default:
                return state
        }
    })
    return (
        <div>
            <span>点击了{count? count : 0}次</span>
            <button onClick = {() => {dispatch('add')}}>++</button>
            <button onClick = {() => {dispatch('reduce')}}>--</button>
        </div>
    )
}
export default ReducerDemo






// import React, {useState,createContext,useContext} from 'react'
// const countContext = createContext()
// function Counter () {
//     let count = useContext(countContext)
//     return(
//         <h2>{count}</h2>
//     )
// }
// export default function Example () {
//     const [count, setCount] = useState(1) //0代表初始值
//     return (
//         <div>
//             <span>点击了{count}次</span>
//             <button onClick = {()=>{setCount(count+1)}}>clickMe</button>
//             <countContext.Provider value={count}>
//                 <Counter></Counter>
//             </countContext.Provider>
//         </div>
//     )
// }
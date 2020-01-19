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
// import React, { useRef } from 'react';
// ref
// function Ref () {
//     const refEl = useRef(null)
//     // const currentval = refEl.current.value
//     const getRef = () => {
//         refEl.current.value = '111'
//         // console.log(refEl.current.value)
//         // console.log(refEl)
//     }
//     return (
//         <>
//             <input type='text' ref={refEl}/>
//             <button onClick={getRef}>获得ref</button>
//         </>
//     )
// }
// export default Ref

// 获取value值
import React, { useState, useEffect } from 'react'

function Ref () {
    useEffect(()=> {
        console.log(text)
    })
    const [text, setText] = useState('huang')
    return (
        <>
        <input value={text} onChange={(e) => {setText(e.target.value)}}/>
        </>
    )
}
export default Ref
import React, {useState, useMemo} from 'react'
function Choose () {
    const [huang,sethuang] = useState('黄')
    const [ping,setping] = useState('平')
    return (
        <>
        <button onClick={()=>{sethuang(new Date().getTime())}}>huang</button>
        <button onClick={()=>{setping(new Date().getTime())}}>ping</button>
        <ChildComponent name={huang}>{ping}</ChildComponent>
        </>
    )
    // 必须children接受
    function ChildComponent ({name,children}) {
        function changename() {
            return name + ',你好'
        }
        const activename = useMemo(() => changename(name),[name])
        return (
            <>
            <div>{activename}</div>
            <div>{children+'你好'}</div>
            </>
        )
    }
}
export default Choose
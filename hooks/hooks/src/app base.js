// react版本
// import React, {Component} from 'react';
// export default class App extends Component {
//     state = {
//         count:0
//     }
//     add(){
//         let count = this.state.count+1
//         console.log(count)
//         this.setState({
//             count
//           })
//     }
//     render() {
//         return (
//             <div>
//                 <span>点击了{this.state.count}次</span>
//                 <button onClick = {this.add.bind(this)}></button>
//             </div>
//         )
//     }
// }

// hooks版本
import React, {useState} from 'react'
export default function Example () {
    const [count, setCount] = useState(1) //0代表初始值
    return (
        <div>
            <span>点击了{count}次</span>
            <button onClick = {()=>{setCount(count+1)}}></button>
        </div>
    )
}
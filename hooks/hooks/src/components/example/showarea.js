import React, {useContext} from 'react'
import {colorContext} from './color'
function ShowArea () {
    const {color} = useContext(colorContext)
return (
<div style={{color:color}}>huangping{color}</div>
)
}
export default ShowArea
import React, {useContext} from 'react'
import { colorContext} from './color'
function ShowArea () {
    const {color} = useContext(colorContext)
    return (
        <div>
            <p style={{color:color}}>huangping{color}</p>
        </div>
    )
    }
    export default ShowArea
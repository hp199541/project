import React from 'react'
import { Table, Divider, Tag } from 'antd'
import * as api from './../services/example'
export default class Tablelist extends React.Component {
    componentDidMount () {
        api.getTablelist()
        .then(res => {
            this.setState({
            columns:res.data.columns,
            data:res.data.data
            }) 
        })
        
    }
    render () {
        console.log(this.state)
        return (
            this.state ? 
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
            :
            <div>
                <p>loading</p>
            </div>
        )
    }
}
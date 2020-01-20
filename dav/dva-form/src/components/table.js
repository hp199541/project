import React from 'react'
import { Table, Divider} from 'antd';
// import * as api from './../services/example'
const { Column} = Table;
export default class Tablelist extends React.Component {
    componentDidMount () {
        this.props.dispatch({
            type:'tablelist/getTablelist',
        })
    }
    reduce(params) {
        // console.log(params)
        this.props.dispatch({
            type:'tablelist/removeTablelist',
            payload:this.props.tablelist
        })
        this.render()
    }
    render () {
        console.log(this.props.tablelist)
        const {tablelist} = this.props
        return (
            this.props.tablelist ? 
            <div>
               <Table dataSource={tablelist}>
                    <Column title="First Name" dataIndex="firstName" key="firstName" />
                    <Column title="Last Name" dataIndex="lastName" key="lastName" />
                    <Column title="Age" dataIndex="age" key="age" />
                    <Column title="Address" dataIndex="address" key="address" />
                    <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <span>
                        <a>增加</a>
                        <Divider type="vertical" />
                        <a onClick={this.reduce.bind(this,record)}>删除</a>
                        </span>
                    )}
                    />
                </Table>
            </div>
            :
            <div>
                <p>loading</p>
            </div>
        )
    }
}
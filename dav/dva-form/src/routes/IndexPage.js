import React from 'react';
import { connect } from 'dva';
import Tablelist from '../components/table'
// import styles from './IndexPage.css';

function IndexPage(props) {
  // console.log(props)
  const {tablelist,dispatch} = props
 return (
      <div>
        <Tablelist tablelist ={tablelist} dispatch = {dispatch}/>
      </div>
  );
}
const mapStatetoProps = (state) => {
  // console.log(state.tablelist.data)
  return {
      tablelist:state.tablelist.data
  }
}

export default connect(mapStatetoProps)(IndexPage);

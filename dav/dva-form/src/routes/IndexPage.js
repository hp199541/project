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
  return {
      tablelist:state.tablelist
  }
}

export default connect(mapStatetoProps)(IndexPage);

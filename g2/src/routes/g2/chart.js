import React from 'react';
import { connect } from 'dva';
import Gtwo from '../../components/chart'
function Chart() {
  return (
    <div>
        <Gtwo />
    </div>
  );
}

Chart.propTypes = {
};

export default connect()(Chart);
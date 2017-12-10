import FogPie from './pie';
import React, { Component } from 'react';
import Pie from './pie';
import Bar from './bar';
import PropTypes from 'prop-types';

class BasicComponent extends Component {
  publicComp(){
    const { type, id, width, height, config} = this.props;
    switch (type) {
      case 'pie': // 饼状图
        return <Pie id={id} width={width} height={height} config={config}/>
      case 'line': // 折线图
       
        break;
      case 'waveline': // 波浪图

        break;
      case 'bar': // 柱状图
        return <Bar id={id} width={width} height={height} config={config}/>
        break;
      default:
        break;
    }
  }
  render () {
    const publicComp = this.publicComp()
    return publicComp
  }
}

export default BasicComponent
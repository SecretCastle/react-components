import FogPie from './pie';
import React, { Component } from 'react';
import Pie from './pie';
import Bar from './bar';
import Line from './line';
import WaveLine from './waveline';
import PropTypes from 'prop-types';

class BasicComponent extends Component {
  publicComp(){
    const { type, id, width, height, data , config} = this.props;
    switch (type) {
      case 'pie': // 饼状图
        return <Pie id={id} width={width} type={type} height={height} data={data} config={config}/>
      case 'line': // 折线图
        return <Line id={id} width={width} type={type} height={height} data={data} config={config}/>
        break;
      case 'waveline': // 波浪图
        return <WaveLine id={id} width={width} type={type} height={height} data={data} config={config}/>
        break;
      case 'bar': // 柱状图
        return <Bar id={id} width={width} type={type} height={height} data={data} config={config}/>
        break;
      default: // 默认返回柱状图
        return <Bar id={id} width={width} type={type} height={height} data={data} config={config}/>
        break;
    }
  }
  render () {
    const publicComp = this.publicComp()
    return publicComp
  }
}

BasicComponent.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired
}

export default BasicComponent
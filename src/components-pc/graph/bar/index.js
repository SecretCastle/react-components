import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import CreateTool from '../public/create';

class FogBar extends Component {
  componentDidMount(){
    this.createGraph()
  }

  createGraph(){
    const {id, data, type, config } = this.props;
    this.echartDom = echarts.init(document.getElementById(id));
    const options = CreateTool.createOption(data, type, config);
    this.echartDom.setOption(options)
  }

  render () {
    const {id, width, height} = this.props;
    return (
      <div id={id} style={{width: width, height: height}}></div>
    )
  }
}

export default FogBar;
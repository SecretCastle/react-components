import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import CreateTool from '../public/create';

class FogBar extends Component {
  componentDidMount(){
    this.createGraph()
  }

  createGraph(){
    const {id, config} = this.props;
    this.echartDom = document.getElementById(id);
    const options = CreateTool.createOption(config);
  }

  render () {
    const {id, width, height} = this.props;
    return (
      <div id={id} style={{width: width, height: height}}></div>
    )
  }
}

export default FogBar;
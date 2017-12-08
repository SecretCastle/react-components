import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/line';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FogPie extends Component {
  constructor(props) {
    super(props)

  }

  /**
   * lifecycle
   */
  componentWillMount () {}

  componentDidMount () {
    this.createGraph()
  }

  componentWillReceiveProps (nextProps) {}

  shouldComponentUpdate (nextProps, nextState) {return true;}

  componentWillUpdate (nextProps, nextState) {}

  componentDidUpdate (prevProps, prevState) {}

  componentWillUnmount () {}

  /**
   * method
   */
  createGraph(){
    const {id, config} =this.props;
    this.echarts = echarts.init(document.getElementById(id));
    this.createOption(config)
    this.echarts.setOption({
      color: ['#3398DB','#f00','green'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '1%',
        right: '1%',
        bottom: '1%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true,
            lineStyle:{
              type: 'dotted'
            }
          }
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'直接访问',
          type:'bar',
          barWidth: '60%',
          data:[10, 52, 200, 334, 390, 330, 220]
        }
      ]
    })
  }

  createOption(config){
    let option = {}
    console.log(config);
    return option;
  }

  render () {
    const {id, width, height} = this.props;
    return (
      <div id={id} style={{width: width, height: height}}></div>
    )
  }
}

FogPie.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default FogPie
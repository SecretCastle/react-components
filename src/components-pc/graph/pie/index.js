import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';


class FogPie extends Component {
  constructor(props) {
    super(props)

  }

  /**
   * lifecycle
   */
  componentDidMount () {
    this.createGraph()
  }

  /**
   * methodr
   */
  createGraph(){
    const {id, config} =this.props;
    this.echarts = echarts.init(document.getElementById(id));
    const options = this.createOption(config)
    this.echarts.setOption({
      color: ['#3398DB','#f00','green'],
      title: {
        text: '深圳月最低生活费组成（单位:元）',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/AjQH99che'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }

      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
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
    /**
     * basic configuration
     * that means, we created graph obeject only different with `data` and `id`
     * other configuration or options was united
     */
    let option = {}
    let keys = _.keys(config);
    const length = keys.length;
    for(let index = 0 ; index < length; index++){
      let key = keys[index];
      option[key] = config[key];
    }
    return option;
  }

  /**
   *  create graph configuration to balance different type
   *  return basic configuration of `type` which suitable for fogcloud 
   */
  createConfiguration(type){
    let baseConfig = {};
    const  {config} = this.props;
    baseConfig = {
      title: config.title || '',
      legend: config.legend || '',
      grid:{
        left: '1%',
        right: '1%',
        bottom: '1%',
        containLabel: true
      }
    }
    switch(type){
      case 'pie':

        break;
      case 'line':
         
        break;
      case 'waveline':

        break;
      case 'bar':

        break;
      default:

        break;
    }
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
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  config: PropTypes.object.isRequired
}

export default FogPie
import React, { Component } from 'react'
import _ from 'underscore';

//工厂组件
class Factory extends Component {
   dataFactory(columns, type){
    const length = columns.length;
    let header = {
      col:[],
      th:[]
    }
    for(var index = 0 ; index < length; index++){
      let key = columns[index]
      header.col.push(<col key={key.dataIndex}/>)
      header.th.push(<th key={key.dataIndex}>{key.name}</th>)
    }    
    switch(type){
      case 'col':
        return <colgroup>{header.col}</colgroup>
      case 'th':
        return <tr>{header.th}</tr>
      default:
        return []
    }
  }
  render () {
    const { columns, type } = this.props
    let result = this.dataFactory(columns, type);
    return result
  }
}


class FactoryData extends Component {
  dataFactory(dataSource, type){
    let result = [];
    for(let index = 0 , len = dataSource.length; index < len; index++){
      let innerRes = []
      let item = dataSource[index];
      let keys = _.keys(item);
      for(let indexInner = 0, innerLen = keys.length; indexInner < innerLen; indexInner++){
        let key = keys[indexInner];
        if(key !== 'key') innerRes.push(<td key={key}>{item[key]}</td>)
      }
      result.push(<tr key={type+item.key}>{innerRes}</tr>)
    }
    return <tbody>{result}</tbody>;
  }
  render () {
    const {dataSource, type} = this.props;
    const result = this.dataFactory(dataSource);
    return  result;
  }
}


class TableLeft extends Component {
  render () {
    const { columns, dataSource } = this.props;
    return (
      <div className="rc_table_left_container">
        <div className="rc_table_left_header_container">
          <table>
            <Factory columns={columns} type={'col'}/>
            <thead>
              <Factory columns={columns} type={'th'}/>
            </thead>
          </table>
        </div>
        <div className="rc_table_left_body_container">
          <table>
            <Factory columns={columns} type={'col'}/>
            <FactoryData dataSource={dataSource} type="left"/>
          </table>
        </div>
      </div>
    )
  }
}

class TableRight extends Component {
  render () {
    const { columns, dataSource } = this.props;
    return (
      <div className="rc_table_right_container">
        <div className="rc_table_right_header_container">
          <table>
            <Factory columns={columns} type={'col'}/>
            <thead>
              <Factory columns={columns} type={'th'}/>
            </thead>
          </table>
        </div>
        <div className="rc_table_right_body_container">
          <table>
            <Factory columns={columns} type={'col'}/>
            <FactoryData dataSource={dataSource} type="right"/>
          </table>
        </div>
      </div>
    )
  }
}

class TableScroll extends Component {
  state = {
    timeStamp : new Date().getTime()
  }
  componentDidMount () {
    this.domHeader = document.getElementById(this.state.timeStamp+"_header");
  }

  bodyScroll(e) {
    this.domHeader.scrollLeft = e.target.scrollLeft
  }
  
  headerScroll(e){
    this.domBody.scrollLeft = e.target.scrollLeft;
  }

  render () {
    const { columns, leftSide, rightSide, setWidth, dataSource } = this.props;
    const len = columns.length;
    return (
      <div 
        className="rc_table_scroll_container" 
        id={this.state.timeStamp+"_container"} 
        onScroll={(e) => this.bodyScroll(e)} 
        style={{margin:`0 ${rightSide*100}px 0 ${leftSide*100}px`}}>
        <div className="rc_table_scroll_header_container" id={this.state.timeStamp+"_header"} style={{width:`${setWidth}px`}}>
          <table width={`${len * 100}`}>
            <Factory columns={columns} type={'col'}/>
            <thead>
              <Factory columns={columns} type={'th'}/>
            </thead>
          </table>
        </div>
        <div className="rc_table_scroll_body_container">
          <table width={`${len * 100}`}>
            <Factory columns={columns} type={'col'}/>
            <FactoryData dataSource={dataSource} type="center"/>
          </table>
        </div>        
      </div>
    )
  }
}

class Table extends Component {
  state = {
    timeStamp: new Date().getTime(),
    setWidth:1500
  }

  dataFactoryth(columns){
    let result = {
      'left':[],
      'right':[],
      'center':[]
    };
    for(let index = 0 , len = columns.length; index < len; index++){
      let item = columns[index];
      if(_.has(item, 'fix')){
        if(item.fix === 'left'){
          result['left'].push(item);
        }else{
          result['right'].push(item);
        }
      }else{
        result['center'].push(item)
      }
    }
    return result;
  }

  dataFactorytd(dataSource, colFacResult){
    let result = {
      'left':[],
      'right': [],
      'center': []
    }
    // 获得col的key值，保存起来
    let leftcolkey = this.forLoop(colFacResult['left'], 0, colFacResult['left'].length),
        rightcolkey= this.forLoop(colFacResult['right'], 0, colFacResult['right'].length),
        centercolkey = this.forLoop(colFacResult['center'], 0, colFacResult['center'].length);

    for(let index = 0 ; index < dataSource.length; index++){
      let leftRes = {}, rightRes = {}, centerRes = {};
      const item = dataSource[index];
      let keys = _.keys(item);
      let keyLen = keys.length;
      // 比较
      for(let i = 0 ; i < keyLen; i++){
        let key = keys[i];
        // 判断在哪个堆中
        if(leftcolkey.includes(key)){
          leftRes[key] = item[key]
        }
        if(rightcolkey.includes(key)){
          rightRes[key] = item[key]
        }
        if(centercolkey.includes(key)){
          centerRes[key] = item[key]          
        }
      }
      centerRes['key'] = item.key;
      leftRes['key'] = item.key;
      rightRes['key'] = item.key;
      result.left.push(leftRes);
      result.right.push(rightRes);
      result.center.push(centerRes);
    }
    return result;
  }

  // 循环返回数组
  forLoop(arr, startIndex = 0, length){
    let result = [];
    if(startIndex > length){
      return [];
    }
    const innerloop = (arrs, startIndex, length) => {
      for(let index = startIndex; index < length ;index++){
        let item = arrs[index];
        if(_.isArray(item)){
          innerloop(item, 0 ,item.length)
        }else{
          result.push(item.dataIndex)
        }
      }
    }
    innerloop(arr, startIndex, length);
    return result.filter( (i,index, array) => array.indexOf(i) === index)
  }

  componentDidMount(){
    this.mainContainer = document.getElementById(this.state.timeStamp+"_main_container");
    const clientWidth = this.mainContainer.clientWidth;
    this.setState({
      setWidth: clientWidth
    });

    // 代码去抖
    // 监听onresize
    this.listenWindowsSize()
  }

  listenWindowsSize(){
    const _this = this;
    const load = () => {
      let timer =  null
      return function(){
        clearTimeout(timer)
        timer = setTimeout(() => {
          const clientWidth = _this.mainContainer.clientWidth;
          _this.setState({
            setWidth: clientWidth
          })
        }, 500)
      }
    }
    window.onresize = load();
  }
  
  containerScroll(e){
    let scrollTop = e.target.scrollTop;
  }

  render () {
    const { columns, dataSource } = this.props;
    let colFacResult = this.dataFactoryth(columns)
    let dataFacResult = this.dataFactorytd(dataSource, colFacResult)
    return (
      <div className="rc_table_container" id={this.state.timeStamp+"_main_container"} onScroll={(e) => this.containerScroll(e)}>
        <TableLeft 
          columns={colFacResult['left']} 
          dataSource={dataFacResult['left']}
        />
        <TableRight 
          columns={colFacResult['right']} 
          dataSource={dataFacResult['right']}
        />
        <TableScroll 
          setWidth={this.state.setWidth - (colFacResult['left'].length * 100) - (colFacResult['left'].length * 100)} 
          columns={colFacResult['center']} 
          leftSide={colFacResult['left'].length} 
          rightSide={colFacResult['right'].length}
          dataSource={dataFacResult['center']}
        />
      </div>
    )
  }
}

export default Table;


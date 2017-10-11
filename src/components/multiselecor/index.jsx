import React from 'react';
import ClassNames from 'classnames';
import { findDOMNode } from 'react-dom';

/**
 * type => 这里可以选择对有，week,month or diy
 * week: 星期
 * month: 每一月
 * diy: diy
 * 
 */
let selector = [],
    selectedArr = [];
class MultiSelector extends React.Component {
  constructor(props){
    super(props)
  }

  hideMultiSelector = () => {
    this.props.onShowTheMulti({
      isShow:false
    });
    this.props.selectedFn(selectedArr.sort());
  } 

  select(index,e,value){
    let el = findDOMNode(e.currentTarget);
    let isNotSeleted = this.hasNotSeleted(el.children[1]);
    if(isNotSeleted){
      el.children[1].classList.remove('notseleted')
       if(!selectedArr.includes(value)){
         selectedArr.push(value)
       }
    }else{
      el.children[1].classList.add('notseleted')
      if(selectedArr.includes(value)){
        selectedArr.splice(selectedArr.indexOf(value),1);
      }
    }
  }

  hasNotSeleted(dom){
      if([...dom.classList].includes('notseleted')){
        return true;
      }
      return false
  }
  
  componentWillMount(){
    const { type } = this.props;
    switch (type) {
      case 'week':
        selector = ['周一','周二','周三','周四','周五','周六','周日']
        break;
      case 'month':
        selector = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        break;
      case 'diy':
        const { data } = this.props;
        if(!data){
          console.error('if you set type to diy,please add "data" props in "MultiSelector"')
          return
        }
        if(!(data instanceof Array)){
          console.error('please set "data" to "Array"')
          return 
        }
        selector = data;
        break;
      default:
        break;
    }
    
  }

  render() {
    const {isShow,data,type} = this.props
    if(type === 'week'){
      selectedArr = data
    }
    
    return(
      <div className={ClassNames('multiselector_wrap',{'isShow':isShow})} >
        <div className="shadow_wrap" onClick={this.hideMultiSelector}></div>
        <div className="selector_wrap">
          {
            selector.map((ele,index) => (
              <div className="selector_wrap_item" key={index} onClick={e => {this.select(index,e,selector[index])}}>
                <span>{ele}</span>
                <span className={ClassNames('iconfont',{'notseleted': !data.includes(ele)})}>&#xe620;</span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default MultiSelector;
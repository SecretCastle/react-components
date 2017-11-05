import React from 'react';
import { findDOMNode } from 'react-dom';
import ClassNames from 'classnames';

const WithPoint = (props) => {
  return (
    <div className="rc_slider_step_icon" style={{left: props.pos + '%' }}></div>
  )
}

class Slider extends React.Component {
  constructor(props){
    super(props);
    this.config = this.props.config
    this.isClick = false;
    this.isMove = false;
    this.valueIndex = Number(this.config.default);
    this.state = {
      move:{
        left: '0%',
      }
    }
  } 

  onTouchStartFn = (e) => {
    this.isClick = true;
    this.startPosition = e.changedTouches[0].clientX;
  }

  onTouchMoveFn = (e) => {
    if(!this.isClick){
      //单纯的点一下，不执行
      return;
    }
    this.isMove = true;


    //设置滑动的距离
    this.moveDistance = e.changedTouches[0].clientX  - this.tracktoleft ;
    let slideStep = Math.round(this.moveDistance / ((this.track_length / (this.config.max - this.config.min)) * Number(this.config.step))) 
    //最终的目的是，获得slideStep，从而渲染滑块
    this.valueIndex = slideStep * this.config.step + Number(this.config.min);

    this.setValueFn(this.valueIndex);
    if(this.props.onSlide){
      this.props.onSlide(this.valueIndex)
    }
    if(this.props.showTip){
      findDOMNode(this).children[1].setAttribute('data-attr',`${this.valueIndex}${this.config.unit}`);
    }
  }

  onTouchEndFn = (e) => {
    this.isClick = false;
    if(this.props.onChange){
      this.props.onChange(this.valueIndex);
    }
  }

  onClickFn = (e) => {
    let clickLength = e.changedTouches[0].clientX - this.tracktoleft;
    let click_index = Math.round( clickLength / ( (this.track_length / (this.config.max - this.config.min)) * Number(this.config.step))) * Number(this.config.step) + Number(this.config.min);
    this.setValueFn(click_index)
    if(this.props.showTip){
      findDOMNode(this).children[1].setAttribute('data-attr',`${click_index}${this.config.unit}`);
    }
    if(this.props.onClickChange){
      this.props.onClickChange(click_index)
    }
  }

  beforeSetValue(value){
    if(this.valueIndex <= this.config.min){
      this.valueIndex = Number(this.config.min);
    }
    if(this.valueIndex >= this.config.max){
      this.valueIndex = Number(this.config.max);
    }
    return this.config.min <= value && value <= this.config.max;
  }

  setValueFn(value){
    let isTrue = this.beforeSetValue(value);
    if(isTrue){
      let movePercent = (value - this.config.min ) * (this.track_length / Number((this.config.max - this.config.min))) / this.track_length * 100;
      this.setState({
        move:{
          left: `${movePercent}%`
        }
      })
    }
  }

  componentDidMount(){
    const track_wrap = findDOMNode(this);
    this.track_length = track_wrap.clientWidth;
    this.tracktoleft = track_wrap.offsetLeft;
    //init value
    this.initSetValue(track_wrap);
  }

  createWithPointHtml(track_wrap){
    //计算点的数量和位置
    let count = (this.config.max - this.config.min)/this.config.step;
    let position;
    let html = `<div class="rc_slider_track_step">`
    for(let i=0 ; i <= count; i++){
      position  = Math.round((i*(this.track_length / count))/this.track_length * 100);
      html += `<div class="rc_slider_step_icon" style="left: ${position}%"></div>`
    }
    let stepTrack = findDOMNode(track_wrap.children[0]);
    stepTrack.innerHTML = html;
  }

  //初始值
  initSetValue(track_wrap){
    if(this.props.showStep){
      this.createWithPointHtml(track_wrap)
    }
    if(this.valueIndex && ((this.config.default - this.config.min) % this.config.step  === 0)){
      track_wrap.children[1].setAttribute('data-attr',`${this.valueIndex}${this.config.unit}`);
      this.setValueFn(this.valueIndex)
    }else{
      track_wrap.children[1].setAttribute('data-attr',`${this.config.min}${this.config.unit}`);
      console.warn('please check your default value')
    }
  }

  render(){
    return (
      <div className="rc_slider_wrap">
          <div className="rc_slider_track" onTouchStart={this.onClickFn}></div>
          <div className={ClassNames('rc_slider_thumb',{'showTip':this.props.showTip})}
              style={this.state.move}
              onTouchStart={this.onTouchStartFn}
              onTouchMove={this.onTouchMoveFn}
              onTouchEnd={this.onTouchEndFn}
          ></div>
      </div>
    )
  }
}



export default Slider;
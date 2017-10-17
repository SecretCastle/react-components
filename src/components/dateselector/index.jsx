import React from 'react';
import ClassNames from 'classnames';
import DataJS from '../../utils/date';
import { findDOMNode } from 'react-dom';

class ScrollUl extends React.Component {
    constructor(props){
        super(props)
        this.isClick = false
        this.isMove = false
        this.moveds = 0
        this.moverl = 0
        this._index = props.data[0]
    }

    onTouchStartFn = (e) => {
        
        this.isClick = true
        this.touchstartpoint = e.changedTouches[0].clientY
    }
    
    onTouchMoveFn = (e) => {
        let move;
        let step;
        if(!this.isClick){
            return
        }
        this.isMove = true
        this.moveds = this.moverl + e.changedTouches[0].clientY - this.touchstartpoint;
        this.dom.style.transform = `translate3d(0, ${this.moveds}px, 0)`
        this.dom.style.transition = `transform 5ms ease`;
    }

    onTouchEndFn = (e) => {
        const {data , onScrollChange , index } = this.props
        if(!this.isClick){
            return
        }
        if(!this.isMove){
            return
        }
        this.isClick = false
        this.isMove = false
        this.moverl = Math.round(this.moveds / this.domli) * this.domli
        this.checkandset()
        this.dom.style.transform = `translate3d(0 , ${this.moverl}px, 0)`
        this._index = data[Math.abs(Math.round(this.moverl / this.domli))]
        onScrollChange(this._index, index)
    }

    checkandset(){
        const { data } = this.props
        const maxlen = (data.length - 1) * this.domli
        if(!(this.moverl <= 0 && Math.abs(this.moverl) < maxlen)){
            if(this.moverl > 0){
                this.moverl = 0
            }else{
                this.moverl = -maxlen
            }
        }
    }

    setDefault(){
        const { value, data } = this.props;
        if(!data.includes(value)){
            return
        }
        this._index = value
        this.moverl = -(this.domli * data.indexOf(value))
        this.dom.style.transform = `translate3d(0 , ${this.moverl}px, 0)`
    }

    componentDidMount(){
        this.dom = findDOMNode(this)
        this.domli = this.dom.children[0].clientHeight;
        this.setDefault()
    }

    render(){
        const {data , index} = this.props;
        return(
            <ul className={ClassNames('ul_scroll_' + index)} 
                onTouchStart={this.onTouchStartFn}
                onTouchMove={this.onTouchMoveFn} 
                onTouchEnd={this.onTouchEndFn}
            >
                <li></li>
                <li></li>
                {
                    data.map((ele,index2) => {
                        return <li key={index2}>{ele}</li>
                    })
                }
                <li></li>
                <li></li>
            </ul>
        )
    }
}   


class DateSelector extends React.Component {
    constructor(props){
        super(props)
        console.log('run')
        this.beforeRun()
    }

    beforeRun(){
        this.selected = [];
        if(this.props.type === 'diy'){
            this.props.value.forEach((ele,index) => {
                if(this.props.dataset[index].includes(ele)){
                    console.log('include')
                    this.selected.push(ele)
                }else{
                    this.selected.push(this.props.dataset[index][0])
                }
            })
        }else{
            this.selected.push(this.props.value[0],this.props.value[1])
        }
    }

    /*根据type获得滚动的滑条*/
    getRollWithType(type){
        const { dataset } = this.props;
        let data = []
        let rule = [
            {
                match: function(type){
                    return type === 'date'
                },
                doRun:function(type){
                    data = DataJS.getYearStamp()
                }
            },
            {
                match:function(type){
                    return type === 'time'
                },
                doRun:function(type){
                    data = DataJS.getTimeStamp()
                }   
            },
            {
                match:function(type){
                    return type === 'diy'
                },
                doRun:function(type){
                    data = dataset
                }
            }
        ]
        for(let i = 0 , len = rule.length; i < len ; i++){
            if(rule[i].match(type)){
                rule[i].doRun(type)
            }
        }
        return data
    }

    onScrollChangeFn (e,index) {
        const { value, type, onChange} = this.props
        const roll_data = this.getRollWithType(type)
        for(let i = 0 , len = roll_data.length ; i < len ; i++){
            if(i === index){
                 this.selected[i] = e
            }
        }
        if(onChange){
            onChange(this.selected)
        }
    }

    render() {
        const {type , value} = this.props
        const roll_data = this.getRollWithType(type)
        let innerContent = null;
        if(type === 'date'){
            innerContent = <ScrollUl data={roll_data[0]}  index={0} value={new Date().getFullYear()}   onScrollChange={ (e,index) => this.onScrollChangeFn(e,index)}/>
             //later           
        }else{
            innerContent = roll_data.map((ele,index) => {
                return (
                    <ScrollUl data={ele} key={index} index={index} value={value[index]}   onScrollChange={ (e,index) => this.onScrollChangeFn(e,index)}/>
                )
            })
        }
        return ( 
            <div className="rc_ds_wrap">
                <div className="rc_ds_top_shadow"></div>
                <div className="rc_ds_bottom_shadow"></div>
                <div className="rc_ds_selected_line"></div>
                <div className="rc_ds_container">
                    {
                       innerContent
                    }
                </div>
            </div>
        )
    }
}

export default DateSelector;
# react-components
[page]
> multiselector_actionsheet

![](http://oxzz0e76z.bkt.clouddn.com/WX20171018-104117@2x.png)
code
```js
<button value="click me" onClick={this.showMultiSelector}>click me</button>
<MultiSelector 
    isShow={this.state.isShow}
    onShowTheMulti={ e => { this.setState({ isShow:e.isShow })}}
    type={'week'}
    selectedFn = {e=>{this.setState({data:e}); console.log(this.state.data)}}
    data={this.state.data}
/>
```

属性名称|说明|类型
---|----|----
type|包括'week'.'month',‘diy'自定义| String
selectedFn|选中关闭后返回的数据|Function
data|默认值|Array
diyData|当type为’diy'自定义时，传入的数据|Array

[page]
> slider

![](http://oxzz0e76z.bkt.clouddn.com/WX20171018-110131@2x.png)
```js
<Slider 
config={
    { 
        max:'50',
        min:'0',
        step:'2',
        default: '10',
        unit:'%'
        }
    }
    onChange={ e => this.onChangeFn(e)}
    onSlide = { e => this.onSlideFn(e)}
    showStep={false}
    showTip={true}
/>
```

属性名称|说明|类型
----|----|----
config|配置项|Object
onChange|滑动结束后触发的函数|Function
onSlide|滑动中触发的函数|Function
showStep|滑动条是否显示刻度|Boolean
showTip|滑块上是否显示当前值|Boolean
    
[page]
> scroll_selector

![](http://oxzz0e76z.bkt.clouddn.com/WX20171018-110945@2x.png)

code
```js
const data = [
    ['1','2','3'],
    ['4','5','6']
]
<DateSelector 
    type={'time'} 
    onChange={ e => this.onChangeFn(e)} 
    value={[10,40]} 
    dataset={data}
/>
```

属性名称|说明|类型
----|----|----
type|'time','diy'自定义|String
onChange|选择后触发的函数|Function
value|设置初始值|Array
dataset|当type为diy时，为滑动条设置的数据|Array

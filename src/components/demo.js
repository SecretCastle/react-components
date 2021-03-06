import React from 'react';
import MultiSelector from './multiselecor';
import Slider from './slider';
import DateSelector from './dateselector';

class Demo extends React.Component {
  state =  {
    isShow:false,
    data:['周一','周二']
  }

  showMultiSelector = () => {
    this.setState({
      isShow:true
    })
  }


  onChangeFn(e){
    console.log('滑动到的值',e);
  }

  onSlideFn(e){
    console.log('滑动中的值',e);
  }


  onChangeFnDate = (e) => {
    console.log(e)
  }

  onClickFn = (e) => {
    console.log('点击的',e)
  }

  render(){
    const styles = {
      title:{
        fontSize:'14px',
        paddingLeft:'15px'
      }
    }

    const data = [
      [1,2,3,4,5,6],
      [7,8,9,10,11,12]
    ]
    return(
      <div>
        <div>
          <button value="click me" onClick={this.showMultiSelector}>click me</button>
          <MultiSelector 
            isShow={this.state.isShow}
            onShowTheMulti={ e => { this.setState({ isShow:e.isShow })}}
            type={'week'}
            selectedFn = {e=>{this.setState({data:e}); console.log(this.state.data)}}
            data={this.state.data}
          />
        </div>
        <div>
          <div style={styles.title}>Slider</div>
          <Slider 
            config={
              {
                max:'80',
                min:'0',
                step:'5',
                default: '30',
                unit:'%'
              }
            }
            onChange={ e => this.onChangeFn(e)}
            onSlide = { e => this.onSlideFn(e)}
            onClickChange = { e => this.onClickFn(e)}
            showStep={true}
            showTip={true}
          />
        </div>
        <div>
          <div style={styles.title}>选择器</div>
          <DateSelector type={'time'} onChange={ e => this.onChangeFnDate(e)} value={[10,40]} dataset={data}/>
        </div>
      </div>
    )
  }
}

export default Demo;

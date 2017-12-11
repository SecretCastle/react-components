import _ from 'underscore';

export default {
  createOption(data, type, config){
    const check = this.createBefore(data, type);
    if(!check){
      throw 'please set `data` to Object';
      return
    }
    let option = this.createConfiguration(data, type);
    // 如果存在config，则替换option中config存在的项
    if(config){
      let keys = _.keys(config);
      let length = keys.length;
      for(let index = 0 ; index < length ; index++){
        let key = keys[index]
        option[key] = config[key]
      }
    }
    return option;
  },

  createBefore(data, type){
    if(!_.isObject(data)){
      return false;
    }
    let checkValid = false;
    const checkFn = {
      'line': function(){
        
      },
      'bar': function(){
        let keys = _.keys(data);
        if(keys.includes('x') && keys.includes('y')){
          return true
        }else{
          return false
        }
      },
      'waveline':function(){

      },
      'pie':function(){

      }
    }

    for(let item in checkFn){
      if(type === item){
        checkValid = checkFn[item]();
        break;
      }
    }

    return checkValid
  },

  createConfiguration(data, type){
    let basicConfig = {}
    basicConfig = {
      color: ['rgb(78,170,235)','rgb(138,152,227)', 'rgb(241,134,126)', 'rgb(254,215,118)', 'rgb(154,215,129)'],
      grid:{
        left:'1%',
        bottom:'1%',
        right:'1%',
        containLabel: true
      }
    }
    switch (type) {
      case 'bar':
        let barConfig = {}

        barConfig['xAxis'] = [
          {
            type : 'category',
            data : data['x'],
            axisTick: {
                alignWithLabel: true
            }
          }
        ]
        barConfig['yAxis'] = [
          {
            type:'value',
            data: data['y'] ? data['y']: []
          }
        ]
        barConfig['series'] = [
          {
            type:'bar',
            data: data.data
          }
        ]
        basicConfig = _.extend(basicConfig, barConfig)
        break;
      case 'line':
        
        break;
      case 'pie':
        
        break;
      case 'waveline':
        
        break;
      default:
        
        break;
    }
    console.log(basicConfig);
    return basicConfig;
  }
}
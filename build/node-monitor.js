const notifier = require('node-notifier');
const chokidar = require('chokidar');
const path = require('path');
const _ = require('underscore');
const colors = require('colors');

const basePath = path.resolve(__dirname);
const filePath = path.resolve(__dirname, '../src');

let debounceTimer = null;
let debounceLogTimer = null;

function toArray(obj){
  if(!_.isObject(obj)) return obj
  if(Array.from){
    return Array.from(obj)
  }else{ 
    return Array.prototype.slice.call(obj)
  }
}

function noti (params) {
  // let params = toArray(arguments);
  let msg = '';
  const paramsLen = params.length;
  for(let index = 1 ; index < paramsLen; index++) {
    msg += `\n${params[index]}  has been ${params[0]}`
  }
  notifier.notify({
    title: `File ${params[0]}`,
    message: msg,
    sound: 'Ping',
    wait: true
  })
}

function log(params){
  let msg = ``;
  const colorLog = (msg) => {
    console.log(colors.green(`${new Date().getTime()} => ${params[0]} :  ${msg}\n`))
  }
  for(let index = 1 , length = params.length; index < length; index++){
    colorLog(params[index])
  }
}

// listen file change function
const watcher = chokidar.watch(basePath, {
  ignored: /(^|[\/\\])\../,
  persistent: true
})

const codewatcher = chokidar.watch(filePath, {
  ignored: /(^|[\/\\])\../,
  persistent: true
})

watcher.on('ready', () => {
  watcher
    .on('add', path => {
      debounce('Add', path)
    })
    .on('change', path => {
      debounce('Changed', path);
    })
    .on('unlink', path => {
      debounce('Removed', path)
    })
    .on('error', error => {
      debounce('Error', error)
    })
})

codewatcher.on('ready', () => {
  codewatcher
    .on('add', path => {
      debounceLog('add', path)
    })
    .on('addDir', path => {
      debounceLog('addDir', path)
    })
    .on('change', path => {
      debounceLog('change', path)
    })  
    .on('unlink', path => {
      debounceLog('unlink', path)
    })
    .on('error', path => {
      debounceLog('error', path)
    })
});

//debounce
function debounce(){
  let arg = toArray(arguments);
  const last =  function(){
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      noti(arg)
    }, 1000)
  }
  last();
}

function debounceLog(){
  let arg = toArray(arguments);
  const last =  function(){
    clearTimeout(debounceLogTimer)
    debounceLogTimer = setTimeout(() => {
      log(arg)
    }, 1000)
  }
  last();
}
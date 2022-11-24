import React, { Component } from 'react'
import RouterWrap from './router'

export default class App extends Component {
  componentDidMount(){
     const oHtml = document.getElementsByTagName('html')[0];
     const width = oHtml.clientWidth;
     if(width<1920){
        oHtml.style.fontSize = 16*(width/1920)+'px';
        console.log(width);
        console.log(16*(width/1920)+'px');
      }
  }
  render() {
    return (
      <div className='App'>
        <RouterWrap/>
      </div>
    )
  }
}
/**
 * 移动端适配记录
 * 
 */
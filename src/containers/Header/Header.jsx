import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Header.less'
import xcpng from '../../static/logo.svg'
import {Link} from 'react-router-dom'

import { Menu } from 'antd';

class Header extends Component {

  render() {
    let activeKey;
    switch (window.location.pathname.split('/')[1]) {
      case '':
        activeKey = 'home';
        break;
      default:
        activeKey = window.location.pathname.split('/')[1];
        break;
    };
    return (
      <div className="header-main">
        <Link to='/'><img src={xcpng} width="140px" className="logo" alt='logo' /></Link>
        <Menu mode='horizontal' activeKey={activeKey}>
          <Menu.Item key='home'>
            <Link to='/'>首页</Link>
          </Menu.Item>
          <Menu.Item key='summit' disabled>
            <Link to='/summit'>年度 Summit</Link>
          </Menu.Item>
          <Menu.Item key='dakashuo'>
            <Link to='/dakashuo/list'>大咖说</Link>
          </Menu.Item>
          <Menu.Item key='activities'>
            <Link to='/activities/list'>活动</Link>
          </Menu.Item>
          <Menu.Item key='articles'>
            <Link to='/articles/list'>文章</Link>
          </Menu.Item>
          <Menu.Item key='news'>
            <Link to='/news/list'>动态</Link>
          </Menu.Item>
          {/* <Menu.Item disabled>
            方法论
          </Menu.Item>
          <Menu.Item disabled>
            案例
          </Menu.Item>
          <Menu.Item disabled>
            导师
          </Menu.Item> */}
          {/* <Menu.SubMenu key='activities' title="活动">
            <Menu.Item key='publish1'>
              <Link to="/activities/pre-launch">星策社区发布活动</Link>
            </Menu.Item>
            <Menu.Item key='publish2'>
              <Link to="/activities/feature-store-meetup-2022-04-10">Feature Store Meetup 2th</Link>
            </Menu.Item>
            <Menu.Item key='publish3'>
              <Link to="/activities/transition-meetup-2022-05-22">企业智能化转型 Meetup 1th</Link>
            </Menu.Item>
            <Menu.Item key='publish4'>
              <Link to="/activities/devops-mlops-meetup-2022-06-05">DevOps + MLOps Meetup 1th</Link>
            </Menu.Item>
            <Menu.Item key='publish5'>
              <Link to="/activities/feature-store-meetup-2022-06-12">Feature Store Meetup 3th</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key='articles' title="文章"> */}
            {/* <Menu.Item key='publish'>
              <Link to="/articles/talk-about-transition-2022-05-17">聊聊传统企业数字化转型（一）</Link>
            </Menu.Item> */}
            {/* <Menu.Item key='publish6'>
              <Link to="/articles/transition-meetup-review">企业智能化转型 Meetup 回顾</Link>
            </Menu.Item>
            <Menu.Item key='publish7'>
              <Link to="/articles/devops-mlops-meetup-review">DevOps + MLOps Meetup 回顾</Link>
            </Menu.Item>
            <Menu.Item key='publish8'>
              <Link to="/articles/feature-store-v3-meetup-review">Feature Store Meetup 3th Meetup 回顾</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key='news' title="动态">
          <Menu.Item key='publish9'>
            <Link to="/news/list">动态</Link>
            </Menu.Item>
          </Menu.SubMenu> */}
          {/* <Menu.Item  disabled>
            工具与平台
          </Menu.Item> */}
        </Menu>
        {/* <div className='header-left'>
          <img src={xcpng} srcSet={`${xcpng2} 2x,${xcpng3} 3x`}
            className="img-xc"
          />
          <div className='header-span'>
              <div className='header-titles1'>
                <Link to="/">首页</Link>
                <div className='header-sep'></div>
              </div>
              <div className='header-titles2'>
                <Link to="/FFL">方法论</Link>
                <div className='header-sep'></div>
              </div>
              <div className='header-titles3'>
                <Link to="/examples">案例</Link>
                <div className='header-sep'></div>
              </div>
              <div className='header-titles4'>
                <Link to="/tutors">导师</Link>
                <div className='header-sep'></div>
              </div>
              <div className='header-titles5'>
                <Link to="/activities">
                  活动
                </Link>
                <embed src={arrowD}></embed>
                <div className='header-sep'></div>
                <div className='header-hidden-content'>
                      <a href="">活动1</a>
                      <a href="">活动2</a>
                </div>
              </div>
              <div className='header-titles6'>
                <Link to="/tools">工具与平台</Link>
                <embed src={arrowD}></embed>
                <div className='header-sep'></div>
                <div className='header-hidden-content'>
                      <a href="">tool1</a>
                      <a href="">工具2</a>
                </div>
              </div>
          </div> */}
          {/* </div> */}
      </div>
    )
  }
}
export default connect(
    //封装状态和操作状态的方法
)(Header)
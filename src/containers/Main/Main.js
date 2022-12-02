import React, { Component } from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

import { Button, Divider, message, Carousel } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import ContactUsModal from '../Modal/index.jsx'

import { ACTIVITIES_CONSTANT, TRANS_ACTIVITIES_CONSTANT } from '../../constants/activities/index';
import { PROJECTS_CONSTAINT } from '../../constants/projects/index';
import { mentorList } from '../../constants/tutors';
import { MEMBERS_CONSTANT } from '../../constants/members/index';

import './Main.less'
import { BANNER_CONSTANTS } from '../../constants/banners/index.js';

class Main extends Component {
  state = {
    telnumb: undefined,
    name: undefined,
    email: '',
    bussiness: undefined,
    position: undefined,
    expectation: '',
    visible: false
  }
  submit = (values) => {
    console.log('values:', values);
    var script = document.createElement("script");
    script.type = "text/javascript";
    var host = `http://43.132.167.131:3001/?name=${values.name}&` +
      `email=${values.email}&telnumb=${values.telnumb}&` +
      `bussiness=${values.bussiness}&position=${values.position}&` +
      `expectation=${values.expectation}`
    script.src = host;
    var html = document.getElementsByTagName('html')[0];
    html.appendChild(script);
    message.success('您的信息我们已收到，感谢您的支持');
  }
  render() {
    const mentorDOM = (mentor) => (
      <div className="mentor-content">
        {mentor.icon && <img src={mentor.icon} alt="头像" />}
        <h3>{mentor.name}</h3>
        <h4>{mentor.title}</h4>
        <div className='mentor-desc'>
          <p>{mentor.desc}</p>
        </div>
      </div>
    );
    return (
      <div className='main'>
        <ContactUsModal
          visible={this.state.visible}
          onCancel={() => this.setState({ visible: false })}
          onSubmit={this.submit}
        />
        <div className="main-main">
          <div className="main-header">
            <Header />
          </div>
          <Carousel>
            {
              BANNER_CONSTANTS.map((banner, idx) => (
                <div className="main-bgimg" key={idx}>
                  <img src={banner.bg} alt='bg' className="GDPR" />
                  <div className='main-intros'>
                    <div className='main-intro1' style={{ visibility: banner.hidden }}>
                      {banner.title}
                    </div>
                    <div className='main-intro2' style={{ visibility: banner.hidden }}>
                      {banner.subtitle}
                    </div>
                    {
                      banner.optType === 'contact' ?
                        <Button type='primary' className='contact' onClick={() => this.setState({ visible: true })}>
                          <span>{banner.opt}</span>
                          <RightOutlined />
                        </Button> :
                        <Button type='primary' className='contact' target='blank' href={banner.link}>
                          <span>{banner.opt}</span>
                          <RightOutlined />
                        </Button>
                    }
                  </div>
                </div>
              ))
            }
          </Carousel>
          <div className='main-tutor'>
            <div className='main-tutor-content'>
              <div className='main-tutor-tag'>
                <h2>社区导师</h2>
              </div>
              <div className='main-tutor-set'>
                <div className='main-tutors'>
                  {mentorList.map((mentor) => mentorDOM(mentor))}
                </div>
              </div>
            </div>
          </div>
          <div className='main-newActivity' >
            <h2 className='main-newact-title'>
              星策转型大咖说
            </h2>
            <div className='main-newact'>
              {
                TRANS_ACTIVITIES_CONSTANT.filter((act, idx) => idx < 3 ).map((act, idx) => (
                  <>
                    <div className='main-newact1' key={idx}>
                      <div className='img'>
                        <img className='main-newact-bg' alt='act-img' src={act.img}></img>
                      </div>
                      <div className='main-newact-title' >
                        <div className="main-newact-title-content" >
                          {act.title}
                        </div>
                        <div className='main-newact-time'>
                          {act.date}
                        </div>
                        <div className='main-newact-content'>
                          {act.desc}
                        </div>
                        <div className='main-new-act-learnmore'>
                          {act.review_link && <Link to={act.review_link}><span>活动回顾</span></Link>}
                          {act.link && <Link to={act.link}><span>活动预告</span></Link>}
                          {act.bilibili_link && <a target="blank" href={act.bilibili_link}><span>活动视频</span></a>}
                        </div>
                        <Divider />
                      </div>
                      
                    </div>
                  </>
                ))
              }
            </div>
          </div>
          <div className='main-newActivity' >
            <h2 className='main-newact-title'>
              最新活动 <Link to="/activities/list" >查看全部</Link>
            </h2>
            <div className='main-newact'>
              {
                ACTIVITIES_CONSTANT.filter((act, idx) => idx < 3 ).map((act, idx) => (
                  <>
                    <div className='main-newact1' key={idx}>
                      <div className='img'>
                        <img className='main-newact-bg' alt='act-img' src={act.img}></img>
                      </div>
                      <div className='main-newact-title' >
                        <div className="main-newact-title-content" >
                          {act.title}
                        </div>
                        <div className='main-newact-time'>
                          {act.date}
                        </div>
                        <div className='main-newact-content'>
                          {act.desc}
                        </div>
                        <div className='main-new-act-learnmore'>
                          {act.review_link && <Link to={act.review_link}><span>活动回顾</span></Link>}
                          <Link to={act.link}><span>活动预告</span></Link>
                          {act.bilibili_link && <a target="blank" href={act.bilibili_link}><span>活动视频</span></a>}
                        </div>
                        <Divider />
                      </div>
                      
                    </div>
                  </>
                ))
              }
            </div>
          </div>
          <div className='main-tools' >
            <div className='main-tools-content' >
              <h2>工具与平台</h2>
              <div className='main-tool' >
                {
                  PROJECTS_CONSTAINT.map((pro, idx) => (
                    <a href={pro.link || pro.github} target="blank" key={idx}>
                      <div className='main-toolx' >
                        <img src={pro.icon} height="48px" alt='icon'></img>
                        <div className='main-tool1-content'>
                          <div className="main-tool-content-title" >{pro.title}</div>
                          <div className="main-tool-content">
                            {pro.desc}
                          </div>
                        </div>
                      </div>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
          <div className='main-customers' >
            <h2>发起单位</h2>
            <div className='main-customers-content'>
              <div className='main-customers-customers' >
                {MEMBERS_CONSTANT.map((mem) => <img className='customer-img' key={mem.key} style={mem.style} src={mem.icon} alt={mem.key} />)}
              </div>
            </div>
          </div>
          <div className='main-footer'>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
export default Main;

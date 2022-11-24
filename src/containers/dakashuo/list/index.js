import React from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import { TRANS_ACTIVITIES_CONSTANT } from '../../../constants/activities/index';
import { Link } from 'react-router-dom';
import { Button, Divider } from 'antd';
import ActBG from '../../../static/banner/news.png'

import './index.less';

export default function ActivitiesList() {
  return (
    <div className='new-list-container'>
        
        <div className="main-header">
            <Header />
          </div>
        <img className='act-list-bg' width="100%" height="320px" src={ActBG} alt="act-bg"></img>
        <h2 className='act-list-title'>星策转型大咖说</h2>
        <div className='act-list'>
        {
                TRANS_ACTIVITIES_CONSTANT.map((act, idx) => (
                  <>
                    <div className='main-newact1' key={idx}>
                      <div className='img'>
                        <img className='main-newact-bg' width="368px" height="222px" alt='act-img' src={act.img}></img>
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
                        {/* <div className='main-new-act-learnmore'> */}
                        <div className='main-new-act-learnmore'>
                          {act.review_link && <Link to={act.review_link}><span>活动回顾</span></Link>}
                          {act.link && <Link to={act.link}><span>活动预告</span></Link>}
                          {act.bilibili_link && <a target="blank" href={act.bilibili_link}><span>活动视频</span></a>}
                        {/* </div> */}
                        </div>
                      </div>
                    </div>
                    <Divider />
                  </>
                ))
              }
        </div>
        <Footer />
    </div>
    )
}
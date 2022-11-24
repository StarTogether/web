import React, { useEffect } from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import { ACTIVITIES_CONSTANT } from '../../../constants/activities/index';
import { Link } from 'react-router-dom';
import { Button, Divider } from 'antd';
import ActBG from '../../../static/banner/act.png'

import './index.less';

export default function ActivitiesList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='act-list-container'>
        
        <div className="main-header">
            <Header />
          </div>
        <img className='act-list-bg' width="100%" height="300px" src={ActBG} alt="act-bg"></img>
        <h2 className='act-list-title'>活动列表</h2>
        <div className='act-list'>
        {
                ACTIVITIES_CONSTANT.map((act, idx) => (
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
                          {!act.hidden_link && <Link to={act.link}><span>活动预告</span></Link>}
                          {act.bilibili_link && <a target="blank" href={act.bilibili_link}><span>活动视频</span></a>}
                        </div>
                        <Divider />
                      </div>
                     
                    </div>
                  </>
                ))
              }
        </div>
        <Footer />
    </div>
    )
}
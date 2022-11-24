import React, { useEffect } from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import { ARTICLES_CONSTANT } from '../../../constants/articles/index';
import { Link } from 'react-router-dom';
import { Button, Divider } from 'antd';
import ActBG from '../../../static/banner/art.png'

import './index.less';

export default function ActivitiesList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div className='art-list-container'>
        
        <div className="main-header">
            <Header />
          </div>
        <img className='act-list-bg' height="300px"  width="100%" src={ActBG} alt="act-bg"></img>
        <h2 className='act-list-title'>文章列表</h2>
        <div className='act-list'>
        {
                ARTICLES_CONSTANT.filter((act) => !act.hidden).map((act, idx) => (
                  <>
                    <div className='main-newact1' key={idx}>
                      <div className='img'>
                        <img className='main-newact-bg' height="220px" alt='act-img' src={act.img}></img>
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
                          <Link to={act.link}><span>查看详情</span></Link>
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
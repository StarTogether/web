import React, { useState } from 'react'

import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import SummitBG from '../img/summit-bg.png'
import SpeakerImg from '../img/i-Speaker.png'

import { Menu } from 'antd';

import { SUMMIT_REVIEW_INFO } from '../constants/index';

import './index.less';

export default function SummitReview({ }) {
    const [menuKey, setMenuKey] = useState("0");
    const [subKey, setSubKey] = useState("0");

    return (
        <div className='review'>
            <div className="main-header">
                <Header />
            </div>
            <div className='review-header'>
            
            </div>
            <div className='review-container'>
                <img alt='bg' width="100%" src={SummitBG} />
                <div className='review-view'>
                    <Menu mode='horizontal' activeKey={menuKey} onClick={(key) => {
                        setMenuKey(key.key);
                        setSubKey('0');
                    }}>
                        <Menu.Item key="0">主论坛</Menu.Item>
                        <Menu.Item key="1">Feature Store 论坛</Menu.Item>
                        <Menu.Item key="2">MLOps 论坛</Menu.Item>
                        <Menu.Item key="3">转型论坛</Menu.Item>
                    </Menu>
                    <div className='video-container'>
                        <div className='video'>
                            <iframe
                                title='{SUMMIT_REVIEW_INFO[Number(menuKey)].videos[Number(subKey)].key}'
                                src={SUMMIT_REVIEW_INFO[Number(menuKey)].videos[Number(subKey)].link}
                                scrolling="no"
                                border="0"
                                frameborder="no"
                                framespacing="0"
                                allowfullscreen="true"
                            ></iframe>
                        </div>
                        <div className='menu'>
                            <div className='menu-col'>
                                {SUMMIT_REVIEW_INFO[Number(menuKey)].videos.map((menu, m_index) => (
                                    <div className={`menu-item ${m_index == Number(subKey) ? 'menu-item-active' : ''}`} key={m_index} onClick={() => setSubKey(String(m_index))}>
                                        <div className='title'>{menu.title}</div>
                                        <div className='speaker'><img alt='speaker-logo' height="14px" src={SpeakerImg} />{menu.speaker}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <Footer />
        </div>

    )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SummitBG from '../../static/banner/summit.png'
import { Button, Menu, Tabs } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import mainBG from './img/summit-main.png';
import transBG from './img/trans.png';
import mlopsBG from './img/mlops.png';
import featureBG from './img/feature.png';

import './index.less';

export default function Summit({ }) {
    const [menuKey, setMenuKey] = useState({ key: 'main' });

    return (
        <div className='summit'>
            <div className="main-header">
                <Header />
            </div>
            <div className='summit-header'>
                <img width="100%" src={SummitBG} />
                <Button type='primary' className='summit-contact' target='blank'>
                    <Link to="/summit/2022/review">
                    <span>查看活动回顾</span>
                    <RightOutlined />
                    </Link>
                </Button>
            </div>
            <div className='summit-container'>
            <Menu mode='horizontal' activeKey={menuKey.key} onClick={(key) => setMenuKey(key)}>
                <Menu.Item key="main">主论坛</Menu.Item>
                <Menu.Item key="mlops">MLOps 论坛</Menu.Item>
                <Menu.Item key="feature">Feature Store 论坛</Menu.Item>
                <Menu.Item key="trans">转型论坛</Menu.Item>
            </Menu>
            <div className='summit-img'>
                {menuKey.key === 'main' && <img src={mainBG} />}
                {menuKey.key === 'mlops' && <img src={mlopsBG} />}
                {menuKey.key === 'feature' && <img src={featureBG} />}
                {menuKey.key === 'trans' && <img src={transBG} />}
            </div>
            </div>
            <Footer />
        </div>

    )
}
import React, { Component } from 'react';
import './transition.less';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { TRANSITION_CONSTANT, DEVOPS_CONSTANT, FS_V3_CONSTANT, SQL_MLOPS_CONSTANT, FEATURE_STORE_V4_CONSTANT, AUTOML_V1_CONSTANT } from './constant/transition';
import cto51 from '../../static/fs-meetup/cto51.png';
import csdn from '../../static/fs-meetup/csdn.png';
import qrcode from '../../static/fs-meetup/mlopsqrcode.png';

import { Timeline } from 'antd';
export default class Actnew extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        const activity_key = this.props.location.pathname.split('/')[2].split('-')[0];
        let ACTIVITY_CONSTANT;
        switch (activity_key) {
            case 'transition':
                ACTIVITY_CONSTANT = TRANSITION_CONSTANT;
                break;
            case 'devops':
                ACTIVITY_CONSTANT = DEVOPS_CONSTANT;
                break;
            case 'feature':
                ACTIVITY_CONSTANT = FS_V3_CONSTANT;
                break;
            case 'fsv4':
                ACTIVITY_CONSTANT = FEATURE_STORE_V4_CONSTANT;
                break;
            case 'sql':
                ACTIVITY_CONSTANT = SQL_MLOPS_CONSTANT;
                break;
            case 'automl':
                ACTIVITY_CONSTANT = AUTOML_V1_CONSTANT;
                break;
            default:
                ACTIVITY_CONSTANT = TRANSITION_CONSTANT;
                break;
        }
        return (
            <div className='transition-main-container'>
                <div className='tr-actdetail-head'>
                    <div className='main-header'>
                        <Header />
                    </div>
                    <img className='bg' src={ACTIVITY_CONSTANT.BACKGROUND_BG} alt="BG" />
                </div>
                <div className='actdetail-theme'>
                    <div className='actdetail-theme-content'>
                        <div className='actdetail-title'>
                            活动背景
                        </div>
                        <p className='desc'>{ACTIVITY_CONSTANT.BACKGROUND}</p>
                    </div>
                </div>
                <div className='actdetail-process'>
                    <div className='actdetail-title'>
                        活动议程
                    </div>
                    <div className='actdetail-process-content' style={{ left: typeof ACTIVITY_CONSTANT.PROCESS === 'object' ? '146px' : '0' }}>
                        <Timeline>
                            {
                                typeof ACTIVITY_CONSTANT.PROCESS === 'object' ? ACTIVITY_CONSTANT.PROCESS.map((topic) => (
                                    <Timeline.Item color='#6852EF'>
                                        <div className='actdetail-left'>
                                            <h3>{topic.time}</h3>
                                            <div className='actdetail-process-leftimg'>
                                                {topic.speakerImg && <img src={topic.speakerImg} alt="speaker-img" className='img1'></img>}
                                            </div>
                                        </div>
                                        <div className='actdetail-right'>
                                            <h3 className='actdetail-right-title'>{topic.topic}</h3>
                                            <ul>
                                                <h3>{topic.speaker}</h3>
                                                {
                                                    topic.speakerIntro && topic.speakerIntro.split(';').map((intro, idx) => <li key={idx}>{intro}</li>)
                                                }
                                            </ul>
                                            <ul>
                                                {
                                                    topic.intro && <>
                                                        <h3>议题介绍</h3>
                                                        {
                                                            topic.intro.split(';').map((intro, idx) => <li key={idx}>{intro}</li>)
                                                        }
                                                    </>
                                                }
                                            </ul>
                                        </div>
                                    </Timeline.Item>
                                )) : <img src={ACTIVITY_CONSTANT.PROCESS} alt="process" />
                            }
                        </Timeline>
                    </div>
                    {
                        typeof ACTIVITY_CONSTANT.PROCESS === 'object' &&
                        <>
                            <div className='actdetail-title'>
                                合作媒体
                            </div>
                            <div className='media'>
                                {activity_key !== 'feature' && <img src={cto51} alt="51cto" />}
                                {ACTIVITY_CONSTANT.EXTRA_MEDIA && <img src={ACTIVITY_CONSTANT.EXTRA_MEDIA} alt="extra" />}
                                <img src={csdn} alt="csdn" />
                                {/* <img src={juejin} alt="juejin" /> */}
                            </div>
                        </>
                    }
                    <div className='actdetail-title'>
                        如何参加
                    </div>
                    <div className='qrcode'>
                        <img src={qrcode} alt="qrcode" />
                        <div>
                            <h3>MLOps 交流群</h3>
                            <p>扫码进群观看直播</p>
                        </div>
                    </div>
                </div>
                <div className='main-footer'>
                    <Footer />
                </div>
            </div>
        )
    }
}
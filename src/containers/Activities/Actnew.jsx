//  TODO: 旧，待重构删除

import React, { Component } from 'react';
import './Actnew.less';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import tzy from '../../static/fs-meetup/tianzhongyi.png'
import lumian from '../../static/fs-meetup/lumian.png'
import huangbing from '../../static/fs-meetup/huangbing.png'
import wuguanlin from '../../static/fs-meetup/wuguanlin.png'
import tangqingyuan from '../../static/fs-meetup/tangqingyuan.png'

import juejin from '../../static/fs-meetup/juejin.png';
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
        const mentorList = [
            { name: '谭中意', icon: tzy, title: '开放原子开源基金会 TOC副主席', desc: '资深开源专家，20年开源工作经验，开放原子基金会TOC（技术监督委员会）副主席，Apache brpc ppmc member，在百度、腾讯等有深入的平台化和开源治理及运营经验，也是多个开源基金会项目Mozilla、GNOME、Apache、InnerSourceCommons、Openchain的贡献者，对云原生和AI比较熟悉。' },
            { name: '卢冕', icon: lumian, title: '第四范式系统架构师', desc: '香港科技大学计算机系博士 数据库团队和高性能计算团队负责人 开源项目 OpenMLDB负责人' },
            { name: '黄炳', icon: huangbing, title: '中国工商银行软件开发中心大数据和人工智能实验室副主任', desc: '中国工商银行大数据和人工智能领域技术专家，<br/>牵头工行的人工智能技术平台建设和应用推广工作，<br/>目前该平台已荣获2018年第一届世界人工智能大会卓越领导者奖，<br/>2020年人民银行金融科技发展二等奖，并于金融同业中唯一一家通过信通院人工智能开发平台领先级能力测评。' },
            { name: '唐清原', icon: tangqingyuan, title: 'AWS数据分析解决方案架构师', desc: '10+数据领域研发及架构设计经验，历任IBM咨询顾问、Oracle 高级咨询顾问、澳新银行数据部领域架构师，在大数据BI,数据湖,推荐系统,MLOps等平台项目有丰富实战经验。' },
            { name: '吴官林', icon: wuguanlin, title: '网易云音乐人工智能研究院 网易云音乐实时计算总监', desc: '10年+商业化和内容分发算法工程架构经验' },
        ];
        const Mentor = (mentor) => (
            <div className="mentor-content">
                {mentor.icon && <img src={mentor.icon} alt="头像" />}
                <h3>{mentor.name}</h3>
                <h4>{mentor.title}</h4>
                <div className='mentor-desc'>
                    <p>{mentor.desc}</p>
                </div>
            </div>
        );
        const Thead = (src) => {
            <div className='actdetail-tutor-head'>
                <img src={src}></img>
            </div>
        }
        return (
            <div className='actdetail-main-container'>
                <div className='actdetail-head'>
                    <div className='main-header'>
                        <Header />
                    </div>
                    <div className='act-intros-content'>
                        <h2><span style={{ color: '#6852EF' }}>Feature Store</span> Meetup 2th</h2>
                        <p>2022/04/10 14:00-18:00</p>
                    </div>
                </div>
                <div className='actdetail-theme'>
                    <div className='actdetail-theme-content'>
                        <div className='actdetail-title'>
                            活动背景
                        </div>
                        <p className='desc'>
                            Feature Store 作为 MLOps 领域的热门话题，
                            国内已有不少公司拥有自己的技术实现，同时也出现了很多云上产品和开源项目。自 2021年 Feature Store Meetup 第一期起，我们邀请了该领域的业界各家共同探讨如何实现与应用，交流建设心得体会，传播经验体会，得到工程师们的积极反馈。本次 meetup 将更加聚焦特征平台与 Feature Store，特别邀请<span className='bold'>第四范式、AWS、工商银行上海研发中心、网易云音乐</span>，从不同领域不同视角下的深入探讨 Feature Store 在各行业内的实践演进。
                        </p>
                    </div>

                </div>
                <div className='actdetail-process'>
                    <div className='actdetail-title'>
                        活动议程
                    </div>
                    <div className='actdetail-process-content'>
                        <Timeline>
                            <Timeline.Item color='#6852EF'>
                                <div className='actdetail-left'>
                                    <h3>14:00-14:15</h3>
                                    <div className='actdetail-process-leftimg'>
                                        <img src={tzy} className='img1'></img>
                                    </div>
                                </div>
                                <div className='actdetail-right'>
                                    <h3 className='actdetail-right-title'>开场介绍 + Feature Store 概念</h3>
                                    <ul>
                                        <h3>谭中意</h3>
                                        <li>中国开源推进联盟副秘书长</li>
                                        <li>开放原子基金会TOC副主席</li>
                                    </ul>
                                </div>

                            </Timeline.Item>
                            <Timeline.Item color='#6852EF'>
                                <div className='actdetail-left'>
                                    <h3>14:15-15:00</h3>
                                    <div className='actdetail-process-leftimg'>
                                        <img src={lumian} className='img2'></img>
                                    </div>
                                </div>
                                <div className='actdetail-right'>
                                    <h3 className='actdetail-right-title'>OpenMLDB: 开源全栈机器学习特征开发解决方案</h3>
                                    <ul><h3>卢冕</h3>
                                        <li>香港科技大学计算机系博士</li>
                                        <li>第四范式系统架构师</li>
                                        <li>数据库团队和高性能计算团队负责人</li>
                                        <li>开源项目 OpenMLDB 负责人</li>
                                    </ul>
                                    <ul><h3>议题介绍</h3>
                                        <li>
                                            人工智能工程化落地中企业面临的数据与特征难题
                                        </li>
                                        <li>
                                            OpenMLDB 为企业提供全栈 FeatureOps 解决方案
                                        </li>
                                        <li>
                                            人工智能工程化落地中企业面临的数据与特征难题
                                        </li>
                                    </ul>
                                </div>
                            </Timeline.Item>
                            <Timeline.Item color='#6852EF'>
                                <div className='actdetail-left'>
                                    <h3>15:00-15:45</h3>
                                    <div className='actdetail-process-leftimg'>
                                        <img src={huangbing} className='img3'></img>
                                    </div>
                                </div>
                                <div className='actdetail-right'>
                                    <h3 className='actdetail-right-title'>工行人工智能平台建设实践分享</h3>
                                    <ul><h3>黄炳</h3>
                                        <li>中国工商银行软件开发中心大数据和人工智能实验室副主任</li>
                                        <li>中国工商银行大数据和人工智能领域技术专家，牵头工行的人工智能技术平台建设和应用推广工作，目前该平台已荣获2018年第一届世界人工智能大会卓越领导者奖，2020年人民银行金融科技发展二等奖，并于金融同业中唯一一家通过信通院人工智能开发平台领先级能力测评。</li>
                                    </ul>
                                    <ul><h3>议题介绍</h3>
                                        <li>
                                            金融是人工智能最好的实践领域之一，而要规模化建设落地人工智能，需要建设统一的人工智能平台，形成共享统一的智能新基建。此次分享介绍工商银行企业级人工智能平台建设的建设历程，系统架构，应用情况和发展思考。
                                        </li>
                                    </ul>
                                </div>
                            </Timeline.Item>
                            <Timeline.Item color='#6852EF'>
                                <div className='actdetail-left'>
                                    <h3>15:45-16:30</h3>
                                    <div className='actdetail-process-leftimg'>
                                        <img src={tangqingyuan} className='img4'></img>
                                    </div>
                                </div>
                                <div className='actdetail-right'>
                                    <h3 className='actdetail-right-title'>Amazon Feature Store 解决方案介绍</h3>
                                    <ul><h3>唐清原</h3>
                                        <li>AWS数据分析解决方案架构师</li>
                                        <li>10+ 数据领域研发及架构设计经验</li>
                                        <li>历任 IBM 咨询顾问、Oracle 高级咨询顾问、澳新银行数据部领域架构师</li>
                                        <li>在大数据 BI，数据湖，推荐系统，MLOps 等平台项目有丰富实战经验</li>
                                    </ul>
                                    <ul><h3>议题介绍</h3>
                                        <li>
                                            特征库就是AI/ML中的数据仓库，是机器学习领域万丈高楼的地基和刚需,
                                            高质量的特征数据，决定上层算法模型的AUC准确率…etc，业界 data driven 的模型优化也是重要的研究方向，此次 topic 介绍了特征库在行业领域中的各类需求场景，以及AWS针对性的特征库技术解决方案及生产实践。
                                        </li>
                                    </ul>
                                </div>
                            </Timeline.Item>
                            <Timeline.Item color='#6852EF'>
                                <div className='actdetail-left'>
                                    <h3>16:30-17:15</h3>
                                    <div className='actdetail-process-leftimg'>
                                        <img src={wuguanlin} className='img5'></img>
                                    </div>

                                </div>
                                <div className='actdetail-right'>
                                    <ul><h3>网易云音乐特征平台的建设与实践</h3>
                                        <h3 className='actdetail-right-title'>吴官林</h3>
                                        <li>网易云音乐人工智能研究院</li>
                                        <li>网易云音乐实时计算总监</li>
                                        <li>10年+商业化和内容分发算法工程架构经验</li>
                                    </ul>
                                    <ul><h3>议题介绍</h3>
                                        <li>
                                            结合网易云音乐业务特性构建服务于商业化和内容分发算法场景下特征平台，从特征生产、特征存储和特征应用三方面介绍针对特征属性做的相关改造和实践经验。
                                        </li>
                                    </ul>
                                </div>
                            </Timeline.Item>
                            <Timeline.Item color='#6852EF'>
                                <div className='actdetail-left'>
                                    <h3>17:15-18:00</h3>
                                </div>
                                <div className='actdetail-right'>
                                    <h3 className='actdetail-right-title'>Panel:特征平台和Feature Store 应用</h3>
                                    <ul>
                                        谭中意/卢冕/黄炳/吴官林/唐清原
                                    </ul>
                                </div>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                    <div className='actdetail-title'>
                        合作媒体
                    </div>
                    <div className='media'>
                        <img src={cto51} alt="51cto" />
                        <img src={csdn} alt="csdn" />
                        <img src={juejin} alt="juejin" />
                    </div>
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
import tanzhongyi from '../../../static/zhuanxing-meetup/tanzhongyi.png';
import lumian from '../../../static/zhuanxing-meetup/lumian.png';
import andy from '../../../static/zhuanxing-meetup/andy.png';
import yuanliya from '../../../static/zhuanxing-meetup/yuanliya.png';
import transitionBG from '../../../static/zhuanxing-meetup/bg.png';

import liuweifeng from '../../../static/dev-ops-meetup/liuweifeng.png';
import devopsBG from '../../../static/dev-ops-meetup/devops.png';
import sf from '../../../static/dev-ops-meetup/sf.png';

import fsv3BG from '../../../static/fs-meetup-v3/fs-v3.png'
import cdh from '../../../static/fs-meetup-v3/cdh.png'
import gyb from '../../../static/fs-meetup-v3/gyb.png'
import zzm from '../../../static/fs-meetup-v3/zzm.png'

import sqlbg from '../../../static/banner/sql-banner.png'
import sqlprocess from '../../../static/activities/sql-process.png'

import fsv4 from '../../../static/activities/fs-v4/sm-bg.png'
import fsv4process from '../../../static/activities/fs-v4/fsv4-detail.png'

import automl from '../../../static/activities/automl-v1/automl.jpg'
import automlv1 from '../../../static/activities/automl-v1/automl-v1.png'

export const TRANSITION_CONSTANT = {
    BACKGROUND_BG: transitionBG,
    BACKGROUND: `现如今，数字经济逐步进入高质量发展新阶段，智能化转型已经成为企业提升核心竞争力的重要举措。但实际上人工智能的落地仍面临着诸多挑战与困难，如开发门槛高、成本高、落地慢等等。如何通过开源 BI & AI 技术解决这些问题并完成企业智能化的转型升级？
2022 年 5 月 22 日（周日）14:00，星策社区首次开展“企业智能化转型 Meetup。从用户角度出发，特邀社区共建伙伴微众银行、第四范式、中兴通讯的技术专家，共同探讨开源 BI & AI 实现企业智能化转型之路。`,
    PROCESS: [
        {
            topic: '开场 + 活动背景介绍',
            time: '14:00-14:15',
            speaker: '谭中意',
            speakerImg: tanzhongyi,
            speakerIntro: '星策开源社区发起人;开源软件推进联盟副秘书长;开放原子基金会TOC副主席',
            intro: ''
        },
        {
            topic: '企业数字化转型，从大数据平台开始',
            time: '14:15-15:00',
            speaker: 'Andy',
            speakerImg: andy,
            speakerIntro: 'Apache Linkis开源社区负责人;微众银行技术产品专家',
            intro: '微众银行简介;企业数字化转型的思考;使用DSS搭建一站式大数据平台和可视化BI'
        },
        {
            topic: 'OpenMLDB加速企业上线智能化应用',
            time: '15:00-15:45',
            speaker: '卢冕',
            speakerImg: lumian,
            speakerIntro: '开源项目 OpenMLDB 研发负责人;第四范式系统架构师;香港科技大学计算机系博士',
            intro: '机器学习应用在生产环境上线所面临的数据和特征挑战;基于 OpenMLDB 提供的生产级特征平台，快速构建可在生产环境上线的机器学习应用; 企业落地 AI 的典型案例'
        },
        {
            topic: 'Adlik 让AI服务更省、更快、更优，加速企业智能化转型',
            time: '15:45-16:30',
            speaker: '袁丽雅',
            speakerImg: yuanliya,
            speakerIntro: 'Adlik TSC 主席;中兴通讯 AI 工程师',
            intro: '机器学习模型部署痛点;Adlik 机器学习推理加速工具链特点;如何使用 Adlik 加速人工智能落地，助力企业智能化升级'
        },
        {
            topic: 'Panel ：企业智能化转型的旅程',
            time: '16:30-17:00',
            speaker: '谭中意/Andy/卢冕/袁丽雅',
            speakerImg: '',
            speakerIntro: '',
            intro: ''
        }
    ]
};

export const DEVOPS_CONSTANT = {
    BACKGROUND_BG: devopsBG,
    BACKGROUND: '介绍：本次活动聚焦DevOps与MLOps，带你一次了解DevOps与MLOps的异同之处与应用场景、企业如何利用DevOps & MLOps提高效率。特邀极狐GitLab架构师——刘巍锋、第四范式开源项目 OpenMLDB 研发负责人——卢冕，为大家详细介绍MLOps在极狐GitLab中的应用探索，以及第四范式OpenMLDB提供的生产级特征平台，如何在生产环境上线机器学习应用的解决方案。',
    PROCESS: [
        {
            topic: 'DevOps + MLOps，都是为了效率---开场',
            time: '14:00-14:15',
            speaker: '谭中意',
            speakerImg: tanzhongyi,
            speakerIntro: '星策开源社区发起人;开源软件推进联盟副秘书长;开放原子基金会TOC副主席',
            intro: ''
        },
        { 
            topic: 'MLOps 在极狐 GitLab 中的应用探索',
            time: '14:15-15:00',
            speaker: '刘巍锋',
            speakerImg: liuweifeng,
            speakerIntro: '极狐GitLab架构师;曾先后任职于ZTE研发;HP研发，D2iQ（原Mesosphere）解决方案架构师',
            intro: 'MLOps 介绍和现状;极狐 GitLab 中的 MLOps;面临的挑战和展望;Demo 项目介绍及演示'
        },
        {
            topic: 'OpenMLDB：开源实时特征计算平台',
            time: '15:00 – 15:45',
            speaker: '卢冕',
            speakerImg: lumian,
            speakerIntro: '开源项目 OpenMLDB 研发负责人;第四范式系统架构师;香港科技大学计算机系博士',
            intro: '机器学习应用在生产环境上线所面临的数据和特征挑战;基于 OpenMLDB 提供的生产级特征平台，快速构建可在生产环境上线的机器学习应用; 企业落地 AI 的典型案例'
        },
        {
            topic: 'Panel ：企业智能化转型的旅程',
            time: '15:45 – 16:30',
            speaker: '谭中意/刘巍锋/卢冕',
            speakerImg: '',
            speakerIntro: '',
            intro: ''
        }
    ],
    EXTRA_MEDIA: sf
};

export const FS_V3_CONSTANT = {
    BACKGROUND_BG: fsv3BG,
    BACKGROUND: `FeatureStore作为MLOps领域中重要又较为新颖的概念，国内已有不少公司拥有了自己的技术实现，云上产品和开源项目。但企业在实际搭建和应用过程中仍然面临着诸多问题。为了共同探讨如何实现和应用好特征平台FeatureStore，交流建设心得，传播经验体会，星策社区主办的第三期Feature Store Meetup将于2022年6月12日（本周日）14:00 线上开展！
    本次meetup将特别邀请开源爱好者—曾中铭、第四范式平台架构师，开源项目OpenMLDB PMC—陈迪豪、众安保险金融数据应用团队负责人—郭育波，从不同视角深入探讨Feature Store在各行业内的设计解析与应用实践。`,
    PROCESS: [
        {
            topic: '开场 + 介绍特征平台和 Feature Store 概念',
            time: '14:00-14:15',
            speaker: '谭中意',
            speakerImg: tanzhongyi,
            speakerIntro: '星策开源社区发起人;开源软件推进联盟副秘书长;开放原子基金会TOC副主席',
            intro: ''
        },
        { 
            topic: '特征平台如何与DevOps、DataOps结合',
            time: '14:15-15:00',
            speaker: '曾中铭',
            speakerImg: zzm,
            speakerIntro: '开源爱好者',
            intro: '以 tecton、feathr 为例的 feature pipeline as code 特性设计解析;以 feast 为例的数据质量监控特性设计解析'
        },
        {
            topic: 'OpenMLDB加速企业上线智能化应用',
            time: '15:00 – 15:45',
            speaker: '陈迪豪',
            speakerImg: cdh,
            speakerIntro: '第四范式平台架构师;开源OpenMLDB PMC',
            intro: '机器学习应用在生产环境上线所面临的数据和特征挑战;OpenMLDB 为企业提供全栈实时特征计算平台解决方案; 企业落地 AI 的典型案例'
        },
        {
            topic: '众安保险金融特征中台建设',
            time: '15:45 - 16:30',
            speaker: '郭育波',
            speakerImg: gyb,
            speakerIntro: '众安保险金融数据应用团队负责人;曾就职于点融网，陆金所，德勤，ebay 等公司',
            intro: '金融特征工程简介;金融特征平台之顶层设计;特征平台之庖丁解牛;反欺诈特征应用;未来规划'
        },
        {
            topic: 'Panel ：企业智能化转型的旅程',
            time: '16:30 – 17:00',
            speaker: '谭中意/曾中铭/陈迪豪/郭育波',
            speakerImg: '',
            speakerIntro: '',
            intro: ''
        }
    ],
    EXTRA_MEDIA: sf
};

export const SQL_MLOPS_CONSTANT = {
    BACKGROUND_BG: sqlbg,
    BACKGROUND: <p>随着人工智能AI技术的不断发展，各行各业都在加强对 AI  技术的研究与普及。但对于很多企业来说，人工智能的门槛还是太高了！能不能用更简单、易用的编程语言，降低人工智能的门槛，完成工业级别的机器学习 Pipline 呢？答案是：SQL可以！
<br/>
    没错，只用 SQL 也能玩转工业级机器学习「数据加载，清洗，特征工程，模型训练，端到端提供 API 服务」全流程。2022年7月10日（周日）14:00-17:00 星策社区主办的「 MLOps meetup V3 」将带你一探究竟～
<br/>
    
    本次 meetup 特邀星策社区发起人、开源软件推进联盟副秘书长-谭中意；开源项目OpenMLDB 研发负责人、第四范式系统架构师-卢冕；百度飞桨（PaddlePaddle）、EDL、 SQLFlow、Couler 核心开发贡献者-武毅；Byzer社区PMC、Kyligence技术合伙人、资深数据架构师-祝海林，四位大咖讲师分别分享如何使用SQL解决机器学习各阶段难题。
<br/>
    🌟活动详情见海报，欢迎扫码进群参会～🌟`</p>,
    PROCESS: sqlprocess,
    EXTRA_MEDIA: sf
};


export const FEATURE_STORE_V4_CONSTANT = {
    BACKGROUND_BG: fsv4,
    BACKGROUND: <p>机器学习领域以数据为生产资料的新型生产关系中，特征的质量成为AI/ML算法效果的天花板。Feature Store 的出现可以加速推荐建模优化的迭代，简化机器学习中的特征管理和特征计算，并提升机器学习的生产力。国内已有多家公司拥有自己的技术实现，云上产品和开源项目。
    为了共同探讨如何实现和应用好特征平台 FeatureStore ，交流建设心得，传播经验体会，星策社区特此开展了 FeatureStore Meetup 活动，目前已邀请了来自<b>美团外卖、伴鱼、小米、网易云音乐、AWS、工商银行、华为商城、众安保险、第四范式</b>等多家公司的技术专家参与分享，得到了广大开发者的关注和积极反馈！往期内容可查阅B站（https://space.bilibili.com/1209377375）
    <br />
    <br />
    为了继续探索不同场景下 FeatureStore 的实现方式与设计思路，加强技术交流，星策社区 Feature Store Meetup V4 又又又来啦！<b>本次meetup 将于 2022年9月4日（下周日）14:00 线上召开！特邀请星策社区发起人-谭中意；第四范式系统架构师、OpenMLDB研发负责人-卢 冕；腾讯推荐中台架构师-赵喜生；微软首席数据科学家-朱晓勇，4位大咖讲师从不同视角深入探讨Feature Store在各行业内的设计解析与应用实践。</b>
    <br />
    <br />
    🌟活动详情见海报，欢迎扫码进群获取直播链接、点击「阅读原文」即可报名参会～</p>,
    PROCESS: fsv4process,
    EXTRA_MEDIA: sf
};

export const AUTOML_V1_CONSTANT = {
    BACKGROUND_BG: automl,
    BACKGROUND: <p>
   自动机器学习（AutoML）是将机器学习应用于现实问题的端到端流程自动化的过程。随着机器学习部署场景的增多和机器学习算法的进步，AutoML 的应用得到了进一步的发展。作为降低AI科学家门槛，加速AI应用部署的利器，最近几年在工业界的发展十分迅速，同时也出现了许多商业产品和优秀的开源项目包括AutoGluon，H2O，AutoX，AutoDL 等等。
    <br />
    <br />
    2022年11月20日14:00，由星策社区主办的第一期 AutoML Meetup 将通过线上直播开展， 活动特邀自动机器学习（AutoML）领域的优秀开源项目负责人、架构师共同探讨自动机器学习技术方案与最佳实践。
    <br />
    <br />
    🌟活动详情见海报，欢迎扫码进群获取直播链接，即可报名参会～</p>,
    PROCESS: automlv1,
    EXTRA_MEDIA: sf
};
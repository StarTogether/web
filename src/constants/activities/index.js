import banner from '../../static/fs-meetup/banner-sm.png'
import zhuanxing from '../../static/zhuanxing-meetup/zhuanxing-sm.png'
import devops from '../../static/dev-ops-meetup/devops-sm.png'
import fsv3 from '../../static/fs-meetup-v3/fs-v3-sm.png'
import sql from '../../static/activities/sql-sm.png'
import dataops from '../../static/dataops/dataops-sm.jpeg'
import fsv4 from '../../static/activities/fs-v4/sm-bg.png'
import automlv1 from '../../static/activities/automl-v1/automl.jpg'

import mengniu from '../../static/activities/trans/mengniu/mengnniu.png'
import shenxin from '../../static/activities/trans/shenxin/shenxin.png'

export const TRANS_ACTIVITIES_CONSTANT = [
    {
        img: shenxin,
        key: 'feature-store-v4-meetup-2022-09-04',
        title: '星策社区大咖说第二期-沈欣老师数字化转型经验分享',
        desc: '本期星策社区大咖说”将于 2022年11月底线上召开！特邀请星策社区转型导师，前喜茶数字化高级副总裁 沈欣先生，共同探讨数字化转型过程中的方法论，营销数字化转型，以及实践案例。',
        date: '2022.11.28',
        link: '',
        review_link: '',
        bilibili_link: 'https://www.bilibili.com/video/BV1cP411g7Dn/'
    },
    {
        img: mengniu,
        key: 'mengniu-2022-09-27',
        title: '星策社区大咖说第一期-蒙牛数智化访谈',
        desc: '本期星策社区大咖说”于 2022年9月27日（下周二）17:00 线上召开！特邀请星策社区发起人-谭中意 以及蒙牛前数科部总监-刘瑞宝先生，共同探讨蒙牛在数智化转型过程中的方法论，技术架构以及亮点转型成果。',
        date: '2022.09.27',
        link: '',
        review_link: '/activities/mengniu-review',
        bilibili_link: 'https://www.bilibili.com/video/BV1B8411a7RB/?share_source=copy_web&vd_source=4d88e954d9bf6b6ef70c3371c2263254'
    },
];
export const ACTIVITIES_CONSTANT = [
    {
        img: automlv1,
        key: 'automl-v1-meetup-2022-11-20',
        title: 'AutoML Meetup V1 第四范式 & 百度 & AWS ，共探自动机器学习最佳实践',
        desc: '2022年11月20日14:00，由星策社区主办的第一期 AutoML Meetup 将通过线上直播开展， 活动特邀自动机器学习（AutoML）领域的优秀开源项目负责人、架构师共同探讨自动机器学习技术方案与最佳实践。        ',
        date: '2022.11.20',
        link: '/activities/automl-v1-meetup-2022-11-20',
        review_link: '',
        bilibili_link: ''
    },
    {
        img: fsv4,
        key: 'feature-store-v4-meetup-2022-09-04',
        title: 'FeatureStore Meetup 4th',
        desc: '为了共同探讨如何实现和应用好特征平台 FeatureStore ，交流建设心得，传播经验体会，星策社区特此开展了 FeatureStore Meetup 活动，目前已邀请了来自美团外卖、伴鱼、小米、网易云音乐、AWS、工商银行、华为商城、众安保险、第四范式等多家公司的技术专家参与分享，得到了广大开发者的关注和积极反馈！',
        date: '2022.09.04',
        link: '/activities/fsv4-meetup-2022-09-04',
        review_link: '/activities/fsv4-meetup-review',
        bilibili_link: 'https://www.bilibili.com/video/BV1WP4y1Z72h/?spm_id_from=333.999.0.0'
    },
    {
        img: sql,
        key: 'sql-meetup-2022-07-10',
        title: 'SQL也能玩转工业级机器学习？MLOps meetup V3带你一探究竟！',
        desc: '本次 meetup 特邀星策社区发起人、开源软件推进联盟副秘书长-谭中意；开源项目OpenMLDB 研发负责人、第四范式系统架构师-卢冕；百度飞桨（PaddlePaddle）、EDL、 SQLFlow、Couler 核心开发贡献者-武毅；Byzer社区PMC、Kyligence技术合伙人、资深数据架构师-祝海林，四位大咖讲师分别分享如何使用SQL解决机器学习各阶段难题。',
        date: '2022.07.10',
        link: '/activities/sql-mlops-meetup-2022-07-10',
        review_link: '/activities/sql-boy-review',
        bilibili_link: 'https://www.bilibili.com/video/BV1MU4y1B7Ui?spm_id_from=333.999.0.0'
    },
    {
        img: fsv3,
        key: 'feature-store-meetup-2022-06-12',
        title: 'Feature Store Meetup 3th',
        desc: 'Feature Store 作为 MLOps 领域中重要又较为新颖的概念，国内已有不少公司拥有了自己的技术实现，云上产品和开源项目。但企业在实际搭建和应用过程中仍然面临着诸多问题。为了共同探讨如何实现和应用好特征平台 Feature Store，交流建设心得，传播经验体会，星策社区主办的第三期 Feature Store Meetup 将于2022年6月12日（本周日）14:00 线上开展！',
        date: '2022.06.12',
        link: '/activities/feature-store-meetup-2022-06-12',
        review_link: '/activities/feature-store-v3-meetup-review',
        bilibili_link: 'https://www.bilibili.com/video/BV1MA4y1d7hT?spm_id_from=333.999.0.0'
    },
    {
        img: devops,
        key: 'devops-mlops-meetup-2022-06-05',
        title: 'DevOps + MLOps Meetup',
        desc: '本次活动聚焦 DevOps 与 MLOps，带你一次了解 DevOps 与 MLOps 的异同之处与应用场景、企业如何利用 DevOps & MLOps 提高效率。特邀极狐 GitLab 架构师——刘巍锋、第四范式开源项目 OpenMLDB 研发负责人——卢冕，为大家详细介绍 MLOps 在极狐 GitLab 中的应用探索，以及第四范式 OpenMLDB 提供的生产级特征平台，如何在生产环境上线机器学习应用的解决方案。',
        date: '2022.06.05',
        link: '/activities/devops-mlops-meetup-2022-06-05',
        review_link: '/activities/devops-mlops-meetup-review',
        bilibili_link: 'https://www.bilibili.com/video/BV1WB4y1S7gw?spm_id_from=333.999.0.0'
    },
    {
        img: zhuanxing,
        key: 'transition-meetup-2022-05-22',
        title: '企业智能化转型 Meetup 1th',
        desc: '现如今，数字经济逐步进入高质量发展新阶段，智能化转型已经成为企业提升核心竞争力的重要举措。但实际上人工智能的落地仍面临着诸多挑战与困难，如开发门槛高、成本高、落地慢等等。如何通过开源 BI & AI 技术解决这些问题并完成企业智能化的转型升级？ 2022 年 5 月 22 日（周日）14:00，星策社区首次开展“企业智能化转型 Meetup。从用户角度出发，特邀社区共建伙伴微众银行、第四范式、中兴通讯的技术专家，共同探讨开源 BI & AI 实现企业智能化转型之路。',
        date: '2022.05.22',
        link: '/activities/transition-meetup-2022-05-22',
        review_link: '/activities/transition-meetup-review',
        bilibili_link: 'https://www.bilibili.com/video/BV1iT4y1q7sd?spm_id_from=333.999.0.0'
    },
    {
        img: banner,
        key: 'feature-store-meetup-2022-04-10',
        title: 'Feature Store Meetup 2th',
        desc: 'Feature Store 作为 MLOps 领域的热门话题， 国内已有不少公司拥有自己的技术实现，同时也出现了很多云上产品和开源项目。自 2021年 Feature Store Meetup 第一期起，我们邀请了该领域的业界各家共同探讨如何实现与应用，交流建设心得体会，传播经验体会，得到工程师们的积极反馈。本次 meetup 将更加聚焦特征平台与 Feature Store，特别邀请第四范式、AWS、工商银行上海研发中心、网易云音乐，从不同领域不同视角下的深入探讨 Feature Store 在各行业内的实践演进。',
        date: '2022.04.10',
        link: '/activities/feature-store-meetup-2022-04-10',
        review_link: '',
        hidden: true,
        bilibili_link: 'https://www.bilibili.com/video/BV1q34y1Y7G9?spm_id_from=333.999.0.0',
    },
    {
        img: dataops,
        key: 'dataops-meetup-2022-03-12',
        title: '国内首届 DataOps + MLOps Meetup回顾',
        desc: '2022年3月12日，由星策开源社区举办了国内首届“DataOps+MLOps Meetup”，活动采用线下参与、腾讯会议、CSDN、51CTO同步直播方式进行。来自第四范式OpenMLDB及ApacheDophinScheduler开源项目核心成员共同带来了一场精彩的技术视听盛宴。',
        date: '2022.03.12',
        link: '/activities/dataops-meetup-2022-03-12',
        review_link: '/activities/dataops-meetup-review',
        bilibili_link: '',
        hidden_link: true
    },
];
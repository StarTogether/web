// 文章内容
import devops_index from './_md/devops_mlops/index.html'
import talk_index from './_md/talk-about-transition/index.html'

import zhuanxing_index from './_md/transition-review/index.html'
import fs3_index from './_md/features-store-v3/index.html'
import devops_review_index from './_md/devops-review/index.html'
import dataops_index from './_md/dataops-review/index.html'

import mengniu_join from './_md/mengniu-join/index.html'
import zte_join from './_md/zte-join/index.html'
import lushouqun from './_md/lushouqun-confirm/index.html'
import mlops_commitee from './_md/mlops-commitee/index.html'
import sqlboy from './_md/sql-boy/index.html'
import csdn_join from './_md/csdn-join/index.html'
import aisummit from './_md/ai-summit/index.html'
import fsv4 from './_md/fs-v4-review/index.html'
import developer from './_md/developer/index.html'
import dian from './_md/dian-join/index.html'
import shenxin from './_md/shenxin-join/index.html'
import mengniu_html from './_md/mengniu/index.html'

// 文章头图
import devopsBG from '../../static/dev-ops-meetup/devops.png'
import fs3BG from '../../static/fs-meetup-v3/fs-v3.png'
import transBG from '../../static/zhuanxing-meetup/bg.png'
import dataops from '../../static/dataops/dataops.png'
import mlopsBG from '../../static/article/mlops-bg.png'
import shenxinBG from './md/shenxin-join/img/b1.png'
import dianBG from './md/dian-join/img/c1.png'
import developerBG from './md/developer/img/a1.png'

// 文章小图
import transSM from '../../static/article/trans.png'
import banner from '../../static/fs-meetup/banner-sm.png'
import zhuanxing from '../../static/zhuanxing-meetup/zhuanxing-sm.png'
import devops from '../../static/dev-ops-meetup/devops-sm.png'
import fsv3 from '../../static/fs-meetup-v3/fs-v3-sm.png'
import dataopsSM from '../../static/dataops/dataops-sm.jpeg'
import mlops from '../../static/article/mlops.png'
import kaiyuan from '../../constants/articles/md/mlops-commitee/imgs/kaiyuan.png'
import sql from '../../static/banner/sql-banner.png';
import csdnjoinImg from './md/csdn-join/img/csdn-join.png'
import aisummitImg from './md/ai-summit/img/bg.png'
import fsv4Img from '../../static/activities/fs-v4/sm-bg.png'

import mengniu from '../../static/activities/trans/mengniu/mengnniu.png'
// import shenxinsBG from './md/shenxin-join/img/b1.png'
// import diansBG from './md/dian-join/img/c1.png'
// import developersBG from './md/developer/a1.png'

export const ARTICLES_CONSTANT = [
    {
        article_bg: developerBG,
        bg: developerBG,
        img: developerBG,
        key: 'developer-digital-review',
        title: '工程师如何拥抱数字化转型？',
        desc: '疫情加速了全球数字化的进程，国内在一些行业的数字化转型已经引领全球。在这样的浪潮里，身处数字化建设中心的工程师要如何利用自己的职业优势，来利用好数字化转型带来的机遇与挑战呢？',
        date: '2022.08.19',
        link: '/articles/developer-digital-review',
        index_html: developer,
    },
    {
        article_bg: fsv4Img,
        bg: fsv4Img,
        img: fsv4Img,
        key: 'fsv4-meetup-review',
        title: 'DevOps + Machine Learning = MLOps ?',
        desc: '近日，企业智能化转型开源社区 — 星策社区组织了 DevOps 和 MLOps 的 Meetup，是把 DevOps 和 MLOps 拉在一起进行分享的社区活动，笔者作为该活动的组织者，写点东西来说下这两者的关系和异同，并做回顾。',
        date: '2022.09.16',
        link: '/activities/fsv4-meetup-review',
        index_html: fsv4,
        hidden: true
    },
    {
        article_bg: mengniu,
        bg: mengniu,
        img: mengniu,
        key: 'mengniu-review',
        title: '蒙牛前数科部总监刘瑞宝分享蒙牛数字化转型成果-星策社区大咖说第一弹',
        desc: '策社区大咖说是星策社区发起的一项面向企业的数字化转型的深度访谈节目。通过访谈数字化转型中的领先企业，分享他们的经验和案例，从而为当下的企业带来一些启发。本期节目我们有幸邀请到了蒙牛的前数科部总监 刘瑞宝先生，就蒙牛的数智化转型展开探讨。',
        date: '2022.10.21',
        link: '/activities/mengniu-review',
        index_html: mengniu_html,
        hidden: true
    },
    {
        article_bg: mlopsBG,
        bg: mlops,
        img: mlops,
        key: 'devops_ml_mlops-2022-06-21',
        title: 'DevOps + Machine Learning = MLOps ?',
        desc: '近日，企业智能化转型开源社区 — 星策社区组织了 DevOps 和 MLOps 的 Meetup，是把 DevOps 和 MLOps 拉在一起进行分享的社区活动，笔者作为该活动的组织者，写点东西来说下这两者的关系和异同，并做回顾。',
        date: '2022.06.21',
        link: '/articles/devops_ml_mlops-2022-06-21',
        index_html: devops_index
    },
    {
        article_bg: transSM,
        bg: transSM,
        img: transSM,
        key: 'talk-about-transition-2022-05-17',
        title: '聊聊传统企业数字化转型（一）',
        desc: '数字化转型是当今全球企业都密切关注的话题，而在中国市场独特的数字生态下，数字化转型更是尤为重要。',
        date: '2022.05.17',
        link: '/articles/talk-about-transition-2022-05-17',
        index_html: talk_index
    },
    {
        article_bg: sql,
        bg: sql,
        img: sql,
        key: 'sql-boy-review',
        title: 'sql-boy-review',
        desc: 'mlops_commitee & AI技术，帮助企业完成信息化—数字化—智能化转型三阶段，搭建自己的BI、AI平台，并提升AI模型性能，降低企业成本。',
        date: '2022-06-01',
        link: '/activities/sql-boy-review',
        index_html: sqlboy,
        hidden: true
    },
    {
        article_bg: dianBG,
        bg: dianBG,
        img: dianBG,
        key: 'dian-join',
        title: '星策社区再添新导师！OpenTEKr创始人狄安，携手打造数智化新标杆！',
        desc: 'OpenTEKr 创始人、上海开源技术协会副秘书长—狄安，正式加入企业智能化转型开源社区---“星策”。作为拥有二十多年企业级管理软件及数据分析领域的数字化应用服务的专家，狄安老师致力于开源技术在企业数字化建设中的工程化应用，近年来推动企业取得突出转型成绩。未来，狄安将作为星策社区导师继续推进社区建设发展，加速各行业数字化转型进程。',
        date: '2022.10.28',
        link: '/news/dian-join',
        index_html: dian,
        hidden: true
    },
    {
        article_bg: shenxinBG,
        bg: shenxinBG,
        img: shenxinBG,
        key: 'shenxin-join',
        title: '星策社区新晋导师沈欣，携手打造数智化新标杆',
        desc: '近日，广东省连锁经营协会技术委员会联席主席、中国信通院低代码/无代码推进中心技术专家—沈欣，正式加入企业智能化转型开源社区---“星策”。沈欣老师作为企业数字化转型的优秀代表，近年来推动众多企业取得突出转型成绩，未来将作为星策社区导师继续推进社区建设发展，加速各行业数字化转型进程。',
        date: '2022.09.01',
        link: '/news/shenxin-join',
        index_html: shenxin,
        hidden: true
    },
    {
        article_bg: csdnjoinImg,
        bg: csdnjoinImg,
        img: csdnjoinImg,
        key: 'csdn_join',
        title: 'csdn_join',
        desc: 'mlops_commitee & AI技术，帮助企业完成信息化—数字化—智能化转型三阶段，搭建自己的BI、AI平台，并提升AI模型性能，降低企业成本。',
        date: '2022-06-01',
        link: '/news/csdn_join',
        index_html: csdn_join,
        hidden: true
    },
    {
        article_bg: aisummitImg,
        bg: aisummitImg,
        img: aisummitImg,
        key: 'aisummit',
        title: 'aisummit',
        desc: 'mlops_commitee & AI技术，帮助企业完成信息化—数字化—智能化转型三阶段，搭建自己的BI、AI平台，并提升AI模型性能，降低企业成本。',
        date: '2022-06-01',
        link: '/news/aisummit',
        index_html: aisummit,
        hidden: true
    },
    {
        article_bg: kaiyuan,
        bg: kaiyuan,
        img: kaiyuan,
        key: 'mlops_commitee',
        title: 'mlops_commitee',
        desc: 'mlops_commitee & AI技术，帮助企业完成信息化—数字化—智能化转型三阶段，搭建自己的BI、AI平台，并提升AI模型性能，降低企业成本。',
        date: '2022-06-01',
        link: '/news/mlops_commitee',
        index_html: mlops_commitee,
        hidden: true
    },
    {
        article_bg: transBG,
        bg: zhuanxing,
        img: zhuanxing,
        key: 'transition-meetup-review',
        title: '企业智能化转型meetup回顾',
        desc: '2022年5月22日，星策社区携手微众银行、第四范式、中兴通讯等共建单位的技术专家们，共同召开社区首届“企业智能化转型meetup”。本次活动向大家介绍了如何利用开源BI & AI技术，帮助企业完成信息化—数字化—智能化转型三阶段，搭建自己的BI、AI平台，并提升AI模型性能，降低企业成本。',
        date: '2022-06-01',
        link: '/activities/transition-meetup-review',
        index_html: zhuanxing_index,
        hidden: true
    },
    {
        bg: fsv3,
        article_bg: fs3BG,
        img: fsv3,
        key: 'feature-store-v3-meetup-review',
        title: 'Feature Store Meetup V3 回顾',
        desc: '6月12日，星策社区主办的第三期「Feature Store Meetup」于线上开展，本次活动由思否视频号、CSDN直播间、示说网同步支持，累计观看人次超过4500+。',
        date: '2022-06-23',
        link: '/activities/feature-store-v3-meetup-review',
        index_html: fs3_index,
        hidden: true
    },
    {
        article_bg: devopsBG,
        bg: devops,
        img: devops,
        key: 'devops-mlops-meetup-review',
        title: 'DevOps + MLOps Meetup 回顾',
        desc: '6月5日，由星策社区主办的「DevOps+MLOps Meetup」于线上召开，活动由 51CTO视频号、CSDN直播间、开源中国视频号、极狐GitLab视频号四平台同步支持，累计观看人次超过5000',
        date: '2022-06-12',
        link: '/activities/devops-mlops-meetup-review',
        index_html: devops_review_index,
        hidden: true
    },
    {
        bg: devops,
        img: devops,
        key: 'mengniu-join-2022-04-28',
        title: '蒙牛乳业加入星策开源社区，携手推动企业智能化转型建设',
        desc: '6月5日，由星策社区主办的「DevOps+MLOps Meetup」于线上召开，活动由 51CTO视频号、CSDN直播间、开源中国视频号、极狐GitLab视频号四平台同步支持，累计观看人次超过5000',
        date: '2022-06-12',
        link: '/news/mengniu-join-2022-04-28',
        index_html: mengniu_join,
        hidden: true
    },
    {
        bg: devops,
        img: devops,
        key: 'zte-join-2022-04-10',
        title: '中兴通讯加入星策开源社区 携手推动企业智能化转型建设',
        desc: '6月5日，由星策社区主办的「DevOps+MLOps Meetup」于线上召开，活动由 51CTO视频号、CSDN直播间、开源中国视频号、极狐GitLab视频号四平台同步支持，累计观看人次超过5000',
        date: '2022-06-12',
        link: '/news/zte-join-2022-04-10',
        index_html: zte_join,
        hidden: true
    },
    {
        bg: devops,
        img: devops,
        key: 'lushouqun-confirm-2022-04-07',
        title: '星策社区获中国开源软件推进联盟陆首群主席肯定',
        desc: '6月5日，由星策社区主办的「DevOps+MLOps Meetup」于线上召开，活动由 51CTO视频号、CSDN直播间、开源中国视频号、极狐GitLab视频号四平台同步支持，累计观看人次超过5000',
        date: '2022-06-12',
        link: '/news/lushouqun-confirm-2022-04-07',
        index_html: lushouqun,
        hidden: true
    },
    {
        article_bg: dataops,
        bg: dataops,
        img: dataopsSM,
        key: 'dataops-meetup-review',
        title: '国内首届 DataOps + MLOps Meetup回顾',
        desc: '2022年3月12日，由星策开源社区举办了国内首届“DataOps+MLOps Meetup”，活动采用线下参与、腾讯会议、CSDN、51CTO同步直播方式进行。来自第四范式OpenMLDB及ApacheDophinScheduler开源项目核心成员共同带来了一场精彩的技术视听盛宴。',
        date: '2022-03-12',
        link: '/activities/dataops-meetup-review',
        index_html: dataops_index,
        hidden: true
    }
];
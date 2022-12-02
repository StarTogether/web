import summit from '../../static/banner/summit.png';
import mainBg3 from '../../static/main/mainBg@3x.jpg'
import devopsBG from '../../static/banner/devops-banner.png';
import transitionBG from '../../static/banner/trans-banner.png';
import fsv2 from '../../static/banner/fs-v2.png';
import fsv3 from '../../static/banner/fs-v3.png';
import sql from '../../static/banner/sql-banner.png';


export const BANNER_CONSTANTS = [
    {
        key: 'summit',
        title: 'summit',
        bg: summit,
        subtitle: 'summit',
        desc: 'summit',
        hidden: 'hidden',
        link: 'https://6684201514000.huodongxing.com/event/2678448203122',
        opt: '报名活动',
        optType: 'activity'
    },
    {
        key: 'main',
        title: <p>新一代的企业智能化转型<br />开源社区</p>,
        bg: mainBg3,
        subtitle: '共享共建方法论、案例、技术，助力企业智能化转型成功',
        desc: '',
        link: '',
        opt: '联系我们',
        optType: 'contact'
    },
    {
        key: 'sql',
        title:  <p>sql<br />sql</p>,
        bg: sql,
        subtitle: 'sql',
        desc: '',
        hidden: 'hidden',
        opt: '报名活动',
        optType: 'activity',
        link: '/activities/sql-mlops-meetup-2022-07-10'
    },
    {
        key: 'fsv3',
        title:  <p>fsv3<br />fsv3</p>,
        bg: fsv3,
        subtitle: 'fsv3',
        desc: '',
        link: '/activities/feature-store-v3-meetup-review',
        hidden: 'hidden',
        opt: '活动回顾',
        optType: 'review'
    },
    {
        key: 'devops',
        title:  <p>devops<br />meetup</p>,
        bg: devopsBG,
        subtitle: 'devops',
        desc: '',
        link: '/activities/devops-mlops-meetup-review',
        hidden: 'hidden',
        opt: '活动回顾',
        optType: 'review'
    },
    {
        key: 'transition',
        title:  <p>devops<br />meetup</p>,
        bg: transitionBG,
        subtitle: 'devops',
        desc: '',
        link: '/activities/transition-meetup-review',
        hidden: 'hidden',
        opt: '活动回顾',
        optType: 'review'
    },
];
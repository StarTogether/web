import MLD3 from '../../static/project/mldb.png'
import adlik from '../../static/project/adlik.png'
import datastudio from '../../static/project/datastudio.png'

export const PROJECTS_CONSTAINT = [
    {
        key: 'openmldb',
        title: 'OpenMLDB',
        desc: ' OpenMLDB是一个开源机器学习数据库，面向机器学习应用提供正确、高效数据供给。除了超过10倍的机器学习数据开发效率的提升，OpenMLDB也提供了统一的计算与存储引擎减少开发运维的复杂性与总体成本。',
        icon: MLD3,
        link: 'https://openmldb.ai/',
        github: ''
    },
    {
        key: 'dss',
        title: 'DataSphere Studio',
        desc: 'DataSphere Studio (简称 DSS) 是微众银行自研的数据应用开发管理集成框架。基于插拔式的集成框架设计，及计算中间件Linkis, 可轻松接入上层各种数据应用系统，',
        icon: datastudio,
        link: '',
        github: 'https://github.com/WeBankFinTech/DataSphereStudio'
    },
    {
        key: 'adlik',
        title: 'ADlik',
        desc: 'Adlik [ædlik] 是 LF AI 中首个聚焦深度学习模型推理阶段的项目。Adlik 的宗旨是使深度学习模型能够高效地运行在多种部署环境下。',
        icon: adlik,
        link: '',
        github: 'https://github.com/Adlik/Adlik'
    }
];
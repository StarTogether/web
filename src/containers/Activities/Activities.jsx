//  TODO: 旧，待重构删除

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Activities.less'
import tzy from '../../static/tutors/tzy.png'
import hsw from '../../static/tutors/hsw.png'
import ibrahim from '../../static/tutors/ibrahim.png'

class Activities extends Component {
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
      { name: 'Ibrahim Haddad', icon: ibrahim, title: 'LF AI & DATA Executive Director', desc: 'Ibrahim Haddad (Ph.D.) is the Executive Director of the LF AI & Data Foundation that supports and sustains open source innovation in artificial intelligence, machine learning, and deep learning.' },
      { name: '胡时伟', icon: hsw, title: '第四范式联合创始人 首席架构师', desc: '在企业数字化转型、数字化战略顶层设计及大规模机器学习等领域拥有丰富经验主持全球最大银行、国际最大连锁餐饮集团（中国）及多大型制造、能源企业的数字化转型 APEC 数字经济委员会委员、产业数字化课题组组长；混沌大学数字化转型课程特邀讲师' },
      { name: '谭中意', icon: tzy, title: '开放原子开源基金会 TOC副主席', desc: '资深开源专家，20年开源工作经验，开放原子基金会TOC（技术监督委员会）副主席，Apache brpc ppmc member，在百度、腾讯等有深入的平台化和开源治理及运营经验，也是多个开源基金会项目Mozilla、GNOME、Apache、InnerSourceCommons、Openchain的贡献者，对云原生和AI比较熟悉。' },
      { name: '敬请期待' }
    ];
    const mentorDOM = (mentor) => (
      <div className="mentor-content">
        {mentor.icon && <img src={mentor.icon} alt="头像" />}
        <h3>{mentor.name}</h3>
        <h4>{mentor.title}</h4>
        <div className='mentor-desc'>
          <p>{mentor.desc}</p>
        </div>
      </div>
    );
    return (
      <div className='main-main activity-container'>
        <div className='act-content'>
          <div className='act-bgimg'>
            <div className='act-intros-content'>
              汇聚创新力量，智能化转型开源社区星策正式发布
            </div>
          </div>
          <div className='main-header'>
            <Header />
          </div>
          {/* <div className='act-advisor'>
            <h2>
              社区导师
            </h2>
            <div className='main-tutor-content'>

              <div className='main-tutor-set'>
                <div className='main-tutor-set'>
                  <div className='main-tutors'>
                    {mentorList.map((mentor) => mentorDOM(mentor))}
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className='act-video'>
            <div className='act-video-content'>
              <h2>联合发起单位致辞</h2>
              <iframe width="1200px" height="720px" src="//player.bilibili.com/player.html?bvid=BV1w3411W7vJ&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
            </div>
          </div>
          <div className='act-pub'>
            <h2>汇聚创新力量 企业智能化转型开源社区-“星策”正式成立并欢迎加入</h2>
            <article>
              <p>3月30日，由中国开源软件推进联盟、中国信通院、Linux基金会AI & DATA、腾讯、微众银行、第四范式等多家行业领军企业及机构共同发起的国内首个聚焦企业智能化转型领域的开源社区——星策开源社区<a target="_blank" href='/'>startogether.ai</a>正式成立，官网<a target="_blank" href='/'>startogether.ai</a>已同步上线。社区的成立旨在汇聚企业智能化转型攻坚力量，以共享共建的形式加速各行业的转型升级。</p>
              <p>如今，国家大力推进数字经济蓬勃发展，千行百业都在紧抓时代机遇转型升级。在智能化转型已成为企业必选项的当下，由于缺乏体系化的战略支撑以及实践经验，企业面临多方挑战，导致企业转型目标不清晰、转型效果不理想、转型效率低下等问题。业界亟需一个交流、共享的平台，合力破解智能化转型困境。</p>
              <p>国内首个企业智能化转型开源社区——星策应时而生，该社区以共享共建的方式连接企业和 AI，助力企业智能转型成功为使命，聚焦于企业智能转型，是一个由企事业单位、高等院校、科研单位、非营利性组织等各方按照自愿、平等、开源、协作的基础上组成非盈利性开源社区。</p>
              {/* <img src={xingceWebImg} alt="官网截图" />

              <p className='img-extra'>星策社区网站截图</p> */}

              <p>与过往多聚焦在单一技术领域的开源社区不同，星策社区将持续探索并共享共建企业智能转型“方法论”、优质案例、最佳实践及支撑企业智能转型的开源技术，助力企业进行智能化转型；同时社区也将定期举办不同类型活动，邀请各领域的顶尖专家剖析行业、技术发展趋势。</p>

              <p>中国开源推进联盟副秘书长谭中意表示：“星策社区是集合众人之力，助力企业数字化、智能化转型的开源社区，它链接企业数字化和AI，开源共建企业数字化、智能化转型所需的方法论、案例、最佳实践和技术。 中国开源推进联盟很高兴作为联合发起单位之一，参与该社区的创建，共同推进社区建设发展。希望有更多企业参与进来，一起共建。”</p>

              <p>中国信息通信研究院云大所副所长栗蔚表示：“企业数字化转型是我国数字经济发展的重要组成部分，智能化是企业数字化转型的发展趋势，产业的开源、开放、协作能够有效推动企业数字化转型的发展进程。中国信息通信研究院将与众多成员单位共同发起星策社区，通过开源共建的模式，形成企业智能化转型方法论。”</p>

              <p>Linux基金会AI & DATA基金会执行董事Ibrahim Haddad表示：“我们都知道开源软件已经取得了胜利，在过去20年中，我们见证了开源软件的加速采纳和全新开源资产的创建。这一巨大加速背后的关键驱动力是我们认识到共同努力合作实现技术和突破是一种更好的创新方式，共同努力可以做得比我们任何一个人单独做的都多。这就是StarTogether社区的真正意义所在。祝贺在座的每一个人。LF AI & Data期待与大家合作。”</p>

              <p>腾讯开源联盟主席单致豪表示：“今天，拥抱开源并推进数字化转型，已是企业发展必修课。由数字化转型升级为智能化转型，不仅需要提高视野，借鉴行业优秀案例；也要根据企业情况，制定调整战略计划；更需要深耕技术，不断实践积极探索。星策社区从这几方面出发，通过连接 AI 技术与开源生态，助力企业智能化转型。很高兴见证社区的成立，希望能与星策一同成长！”</p>

              <p>微众银行开源管理办公室负责人钟燕清表示：“随着数据成为新经济时代的重要生产要素，企业的数字化和智能化转型需求更加迫切；而开源也成为推动各组织高效协同、产业共同进步的有效途径。很高兴看到星策社区的成立，期望所有参与方能够在社区中积极贡献力量，互相学习先进经验，加速企业智能化转型成功。”</p>

              <p>第四范式副总裁郑曌表示：“很高兴看到星策开源社区的成立。过去，我们见证了开源社区的繁荣壮大，越来越多的技术领域均因开源而突飞猛进。在智能化转型的大潮下，星策社区提供了一个平台，集结了众多优秀的成员献计献策，共同应对并解决企业在智能化转型过程中的诸多问题。第四范式在长期帮助领先企业进行智能化转型过程中，积累了很多经验和技术，非常愿意共享出来，跟社区一起共建，共同助力中国企业智能化转型成功。”</p>

              <p>星策社区欢迎更多有志于投身智能化转型发展的企业、组织及个人加入，协同共建打造智能化转型繁荣的开源生态，助力更多的企业加快智能化转型进程。</p>

              <p>有关星策智能化转型开源社区的更多详情，请访问社区官网<a target="_blank" href='/'>startogether.ai</a>。</p>
            </article>
          </div>
          <div className='main-footer'>
            <Footer />
          </div>

        </div>
      </div>
    )
  }
}
export default connect(

)(Activities)

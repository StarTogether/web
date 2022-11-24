import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, message } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './Footer.less'
import Logo3 from '../../static/logo.svg'
import QRCode from '../../static/qrcode.png';
import MLQRCode from '../../static/mlopsqrcode.png'
import ContactUsModal from '../Modal/index.jsx'

class Footer extends Component {
  state = {
    visible: false
  }
  submit = (values)=>{
    console.log('values:',values);  
    var script = document.createElement("script");
    script.type = "text/javascript";
    var host = `http://43.132.167.131:3001/?name=${values.name}&` +
      `email=${values.email}&telnumb=${values.telnumb}&` +
      `bussiness=${values.bussiness}&position=${values.position}&` +
      `expectation=${values.expectation}`
    script.src = host;
    var html = document.getElementsByTagName('html')[0];
    html.appendChild(script);
    message.success('您的信息我们已收到，感谢您的支持');
  }
  render() {
    return (
      <>
        <ContactUsModal
          visible={this.state.visible}
          onCancel={() => this.setState({ visible: false })}
          onSubmit={this.submit}
        />
        <div className='contact-us'>
          <p>更多内容持续更新，敬请期待</p>
          <Button className='contact' onClick={() => this.setState({ visible: true })}>
            <span>联系我们</span>
            <RightOutlined />
          </Button>
        </div>
        <div className='footer'>
          <div className='footer-width1'>
            <div className='foot-contact-us'>
              <h2>
                联系我们
              </h2>
              <div>
                <ul className='fixed'>
                  <li>
                    <dl className='foot-link'>
                      <dd>
                        邮箱
                      </dd>
                      <dd>
                        <span>startogether2022@163.com</span>
                      </dd>
                    </dl>
                  </li>
                  <li>
                    <dl className='foot-link'>
                      <dd>
                        星策社区
                      </dd>
                      <dd>
                        <img width="120px" alt='qrcode' src={QRCode} />
                      </dd>
                    </dl>
                  </li>
                  <li>
                    <dl className='foot-link'>
                      <dd>
                        MLOps 交流群
                      </dd>
                      <dd>
                        <img width="120px" alt='qrcode' src={MLQRCode} />
                      </dd>
                    </dl>
                  </li>
                  <li>
                    <dl className='foot-link'>
                      {/* <dd>
                              方案咨询
                            </dd>
                            <dd>
                                <span>共建星策</span>
                            </dd> */}
                    </dl>
                  </li>
                  <li>
                    <dl className='foot-link'>
                      {/* <dd>
                              社区
                            </dd>
                            <dd>
                              <span>星策-新一代的企业智能化转型开源社区</span>
                            </dd> */}
                    </dl>
                  </li>
                </ul>
              </div>
            </div>
            <div className='foot-logo'>
              <img width="140px" src={Logo3} alt="xingce"></img>
            </div>
            <div className='foot-copyright'>
              星策社区 ｜版权所有 ©2021—2022 星策社区 保留所有权利 <a href="https://beian.miit.gov.cn/" target="_blank">京 ICP 备 16062885 号-5</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default connect(

)(Footer)


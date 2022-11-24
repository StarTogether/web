import React from 'react';
import { Modal, Form, Input, Button, Checkbox } from 'antd';
import ModalBg from '../../static/modal/modal-bg.png';
import Hid from '../../static/modal/close.svg'

import './index.less';

export default function ContactUsModal(props) {
  const onFinish = (values) => {
    console.log('Success:', values);
    props.onSubmit(values);
    props.onCancel();
  };

  const defaultForm = {
    telnumb: '',
    name: '',
    bussiness: '',
    position: '',
    expectation: '',
  };

  return (
    <Modal
      className='contact-us-modal'
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={null}
      closeIcon={null}
      destroyOnClose
    >
      <h2>填写信息 <br/> 我们将尽快与您联系</h2>
      <img className='modal-bg' src={ModalBg} alt="modal-bg" width='100px' />
      <img onClick={() => props.onCancel()} className='modal-close' src={Hid} alt="modal-close" width='64px' />
      <Form onFinish={onFinish} defaultValue={defaultForm}>
        <Form.Item name="telnumb" rules={[{ required: true, message: '请输入您的电话号码' }]}>
          <Input placeholder='请输入您的电话号码' />
        </Form.Item>
        <Form.Item name="name" rules={[{ required: true, message: '请输入您的姓名' }]}>
          <Input placeholder='请输入您的姓名' />
        </Form.Item>
        <Form.Item name="bussiness" rules={[{ required: true, message: '请输入您的公司' }]}>
          <Input placeholder='请输入您的公司' />
        </Form.Item>
        <Form.Item name="position" rules={[{ required: true, message: '请输入您的职位' }]}>
          <Input placeholder='请输入您的职位' />
        </Form.Item>
        <Form.Item name="expectation">
          <Input.TextArea rows="4" placeholder='请输入您的预期（非必填）' />
        </Form.Item>
        {/* <p>
          <Checkbox defaultChecked={true} /> 同意<Button type='link'>用户协议和隐私条款</Button>
        </p> */}
        <Button className='submit-btn' type="primary" htmlType="submit">
          提交信息
        </Button>
      </Form>
    </Modal>
  )
}
import React, { Dispatch } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import QueueAnim from 'rc-queue-anim'
import { useLogin } from 'service/EntryScreen/EntryScreenHoooks'
import { connect } from 'react-redux'
interface IProps {
  reduxLang: any
}
const Login: React.FC<IProps> = (props) => {
  const { reduxLang } = props
  /**
   * @description: 中后台登录服务
   * @param {*}
   * @return {*}
   */
  const { onFinish } = useLogin()
  return (
     <Form
      name="normal_login"
      className={"login-form"}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <QueueAnim type="left">
        <div key='a'>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined style={{ color: '#1890ff' }}/>}
              placeholder={reduxLang['pages.inputstyle.usernameplaceholder']}
              size='large'
            />
          </Form.Item>
        </div>
        <div key='b'>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: '#1890ff' }}/>}
              type="password"
              placeholder={reduxLang['pages.inputstyle.passwordplaceholder']}
              size='large'
            />
          </Form.Item>
        </div>
        <div key='c'>
          <Form.Item>
            <Button type="primary" htmlType="submit" block size='large'>
              {reduxLang['pages.entryscreen.login']}
            </Button>
          </Form.Item>
        </div>
      </QueueAnim>
    </Form>
  )
}
const mapDispatchToProps = (dispatch: Dispatch<{type: string, payload: any}>) => {
  return {
    reduxSetUserInfo: () => {
      dispatch({
        type: '',
        payload: ''
      })
    }
  }
}
export default connect(null, mapDispatchToProps)(Login)

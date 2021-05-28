import React, { ReactElement, useEffect, useState } from 'react'
import style from './LayoutContent.module.less'
import classNames from 'classnames/bind'
import { Switch, Redirect } from 'react-router-dom'
import AuthRoute from 'appAuthority/AuthRoute/AuthRoute'
import { userDynamicRouters } from 'routers/userDynamicRouters'
import Copyright from 'components/Copyright/Copyright'
import NotFind from 'pages/NotFind/NotFind'

const cx = classNames.bind(style)

const LayoutContent: React.FC = (): ReactElement => {
  const [routerList, setRouterList] = useState([])

  useEffect(() => {
    const routers = JSON.parse(localStorage.getItem('authMenu') || '[]')
    setRouterList(userDynamicRouters(routers))
  }, [])

  return (
    <div className={cx('LayoutContent')}>
      <div className={cx('LayoutContent-content')}>
        <Switch>
          {
            routerList && routerList.map((router: any) => {
              return (
                <AuthRoute key={router.path} {...router} />
              )
            })
          }
          <Redirect from={'/'} to={'/home'} exact/>
          <AuthRoute path={'*'} component={NotFind} />
        </Switch>
      </div>
      <Copyright/>
    </div>
  )
}

export default LayoutContent

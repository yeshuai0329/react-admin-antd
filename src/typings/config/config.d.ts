import { obj } from "typings/typings"

type TLocale = 'zh_CN' | 'en_US'
type TTheme = 'dark' | 'light' | undefined

export interface TConfig extends obj {
  // 默认国际化语言配置
  locale: TLocale,
  // 是否有侧边菜单
  siderMenuIsHas?: boolean,
  // 侧边菜单的颜色
  siderMenuTheme?: TTheme,
  // 侧边菜单的是否收起
  siderMenuIsCollapsed?: boolean,
  // 侧边菜单是否有LOGO
  siderMenuIshHasLogo: boolean,
  // 是否有顶部菜单
  topMenuIsHas?: boolean,
  // 是否有顶部面包屑
  breadCrumbIsHas?: boolean
}
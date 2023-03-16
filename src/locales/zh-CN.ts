import type { LocaleConfig } from 'PackageNameByCore';

const zhCN: LocaleConfig = {
  language: 'zh_CN',
  title: '简体中文',
  translation: {
    'route-home': '主页',
    'route-dynamic/:id': '动态路由-ID',
    'route-dynamic/:id/:name': '动态路由-ID-Name',
    'route-home/dynamic/:id': '主页-动态路由-ID',
    'route-home/dynamic/:id/:name': '主页-动态路由-ID-Name',
    'route-home/dynamic': '主页-子页面',
    'sub-page-view': '子路由页面',
    jump: '跳转',
    'user-info': '用户信息',
  },
};

export default zhCN;

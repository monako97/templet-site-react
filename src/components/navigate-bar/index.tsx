import React, { useMemo } from 'react';
import { matchUtil, useLocation, useLocale, Link } from 'PackageNameByCore';
import './index.css';

function createHash() {
  return Math.random().toString(36);
}
const btns = [
  {
    path: `/dynamic/${createHash()}`,
    key: 'dynamic/:id',
    title: '页面1',
  },
  {
    path: `/dynamic/${createHash()}/${createHash()}`,
    key: 'dynamic/:id/:name',
    title: '页面2',
  },
  {
    path: `/home`,
    key: 'home',
    title: '首页',
  },
  {
    path: `/home/dynamic/${createHash()}`,
    key: 'home/dynamic/:id',
    title: '页面3',
  },
  {
    path: `/home/dynamic/${createHash()}/${createHash()}`,
    key: 'home/dynamic/:id/:name',
    title: '页面4',
  },
];

const NavigatorBar = () => {
  const { getLanguage } = useLocale();
  const jumpText = getLanguage('jump');
  const l = useLocation();
  const match = useMemo(
    function () {
      return matchUtil(l.pathname);
    },
    [l.pathname]
  );

  return (
    <footer className="navs">
      {btns.map(function (item) {
        return (
          <Link key={item.key} to={item.path} className={match.key === item.key ? 'active' : ''}>
            <span>{item.title}</span>
            <i>{jumpText}</i>
          </Link>
        );
      })}
    </footer>
  );
};

export default NavigatorBar;

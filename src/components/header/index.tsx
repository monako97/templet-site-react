import React, { useMemo } from 'react';
import { matchUtil, useLocation, useLocale } from 'PackageNameByCore';
import './index.css';

const Header = () => {
  const l = useLocation();
  const { getLanguage } = useLocale();
  const match = useMemo(() => {
    return matchUtil(l.pathname);
  }, [l.pathname]);

  return <header className="header">{getLanguage(match.i18n || match.key)}</header>;
};

export default Header;

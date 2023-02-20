import React from 'react';
import { useOutlet } from 'PackageNameByCore';
import NavigatorBar from '@/components/navigate-bar';
import Header from '@/components/header';
import './index.css';

const App = () => {
  const outlet = useOutlet();

  return (
    <div className="body">
      <Header />
      <main>{outlet}</main>
      <NavigatorBar />
    </div>
  );
};

export default App;

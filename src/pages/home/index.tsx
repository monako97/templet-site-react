import React, { useEffect } from 'react';
import { useDispatch, useLocale, useOutlet, useSelector, shallowEqual } from 'PackageNameByCore';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const outlet = useOutlet();
  const { getLanguage } = useLocale();
  const userInfo = useSelector((state: Models) => state.account, shallowEqual);

  useEffect(() => {
    dispatch({
      type: 'account/fetchLogin',
      payload: {
        username: 'admin',
        password: '123456a',
      },
    });
  }, [dispatch]);
  return (
    <>
      <div>
        <details>
          <summary>{getLanguage('user-info')}</summary>
          <pre>
            <code>{JSON.stringify(userInfo, null, 4)}</code>
          </pre>
        </details>
        <details>
          <summary>Location</summary>
          <pre>
            <code>{JSON.stringify(window.location, null, 4)}</code>
          </pre>
        </details>
      </div>

      {outlet && (
        <div>
          {getLanguage('sub-page-view')}
          {outlet}
        </div>
      )}
    </>
  );
};

export default Home;

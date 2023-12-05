import React, { useEffect } from 'react';

const UserLayout = ({ children }) => {
  useEffect(() => {
    document.body.classList.add('background');
    document.body.classList.add('no-footer');

    return () => {
      document.body.classList.remove('background');
      document.body.classList.remove('no-footer');
    };
  }, []);

  return (
    <>
    
    {/* style={{
        "background":"url('/assets/img/login/moon.jpg');"
      }} */}
      <div className="fixed-background" style={{
       "background": "url('/assets/img/login/sample3.jpg') no-repeat center center fixed",
       "backgroundSize": "cover",
       "width": "100%",
       "height": "100%",
       "position": "fixed",
       "top": "0",
       "right": "0",
       "bottom": "0",
       "left": "0",
      }}/>
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default UserLayout;

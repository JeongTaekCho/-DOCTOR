import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnRender = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 컴포넌트가 렌더링되면 스크롤을 맨 위로 올려줍니다.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnRender;

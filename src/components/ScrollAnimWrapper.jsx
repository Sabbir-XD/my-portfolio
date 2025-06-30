import { useEffect } from 'react';
import { useLocation } from 'react-router';
import AOS from 'aos';

const ScrollAnimWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    AOS.refresh(); // Re-initialize animations on route change
  }, [location.pathname]);

  return children;
};

export default ScrollAnimWrapper;

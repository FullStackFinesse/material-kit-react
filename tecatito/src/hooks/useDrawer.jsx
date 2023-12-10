// import { useState, useEffect } from "react";

// const useDrawer = () => {
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleDrawerToggle = () => {
//     setIsMobileOpen(!isMobileOpen);
//     setIsExpanded(!isExpanded);
//   };

//   const handleResize = () => {
//     if (window.innerWidth <= 990) {
//       setIsExpanded(false);
//       setIsMobileOpen(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return { isMobileOpen, isExpanded, handleDrawerToggle };
// };

// export default useDrawer;
// useDrawer.js
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const useDrawer = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setIsMobileOpen(!isMobileOpen);
    setIsExpanded(!isExpanded);
  };
  useEffect(() => {
    navigate(location.pathname);
    setIsExpanded(false);
    setIsMobileOpen(false);
  }, [location.pathname]);
  const handleResize = () => {
    if (window.innerWidth <= 990) {
      setIsExpanded(false);
      setIsMobileOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobileOpen, isExpanded, handleDrawerToggle };
};

export default useDrawer;

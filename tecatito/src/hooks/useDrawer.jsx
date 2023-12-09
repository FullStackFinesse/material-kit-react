// import { useState } from "react";

// const useDrawer = () => {
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false); // Agrega el estado de expansión

//   const handleDrawerToggle = () => {
//     setIsMobileOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setIsMobileOpen(false);
//   };

//   const toggleExpanded = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return { isMobileOpen, isExpanded, handleDrawerToggle, handleDrawerClose, toggleExpanded };
// };

// export default useDrawer;

//hook
import { useState, useEffect } from "react";

const useDrawer = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Agrega el estado de expansión

  const handleDrawerToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleResize = () => {
    if (window.innerWidth <= 990) {
      setIsExpanded(false);
      setIsMobileOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { isMobileOpen, isExpanded, handleDrawerToggle, toggleExpanded };
};

export default useDrawer;

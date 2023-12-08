// import { useState } from "react";

// const useDrawer = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false); // Agrega el estado de expansión

//   const handleDrawerOpen = () => {
//     setIsDrawerOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setIsDrawerOpen(false);
//   };

//   const toggleExpanded = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return { isDrawerOpen, isExpanded, handleDrawerOpen, handleDrawerClose, toggleExpanded };
// };

// export default useDrawer;

//hook
import { useState } from "react";

const useDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return [isDrawerOpen, handleDrawerOpen, handleDrawerClose];
};

export default useDrawer;

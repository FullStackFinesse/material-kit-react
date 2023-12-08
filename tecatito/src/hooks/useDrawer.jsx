import React, { useState } from "react";

const useDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return { open, handleDrawerOpen, handleDrawerClose };
};

export default useDrawer;

import { useState } from "react";

const useActiveState = (initialState = false) => {
  const [isActive, setIsActive] = useState(initialState);

  const activate = () => {
    setIsActive(true);
  };

  const deactivate = () => {
    setIsActive(false);
  };

  const toggle = () => {
    setIsActive(!isActive);
  };

  return {
    isActive,
    activate,
    deactivate,
    toggle,
  };
};

export default useActiveState;

import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  };

  return { navigateTo };
};

export default useNavigation;

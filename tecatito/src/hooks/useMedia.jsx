import { useEffect, useState } from "react";

const useMedia = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatches = (event) => setMatches(event.matches);

    // Use addEventListener instead of addListener
    mediaQueryList.addEventListener("change", updateMatches);

    // Cleanup by removing the event listener when the component unmounts
    return () => mediaQueryList.removeEventListener("change", updateMatches);
  }, [query]);

  return matches;
};

export default useMedia;

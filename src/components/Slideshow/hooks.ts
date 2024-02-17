import { useEffect, useState } from "react";

import { useSelector } from "../../store/hooks";

export const useSlideshow = () => {
  const { users } = useSelector(({ user }) => user);
  const [currentUserIndex, setCurrentUserIndex] = useState<number>(0);
  const [sliderIsActive, setSliderIsActive] = useState(true);

  useEffect(() => {
    if (!users.length) {
      setCurrentUserIndex(0);
      return;
    }

    if (!sliderIsActive) {
      return;
    }

    const interval = setInterval(() => {
      let newIndex = currentUserIndex + 1;

      if (newIndex >= users.length) {
        newIndex = 0;
      }

      setCurrentUserIndex(newIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentUserIndex, sliderIsActive, users]);

  useEffect(() => {
    setCurrentUserIndex(0);
    setSliderIsActive(true);
  }, [users]);

  return { currentUserIndex, setSliderIsActive };
};

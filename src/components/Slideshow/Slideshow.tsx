import { useSelector } from "../../store/hooks";

import { Button } from "../Button/Button";
import { UserCard } from "../UserCard/UserCard";

import { useSlideshow } from "./hooks";

import { ButtonsContainer, Loader, SlideshowWrapper } from "./styles";

export const Slideshow = () => {
  const { users, loading } = useSelector(({ user }) => user);

  const { currentUserIndex, setSliderIsActive } = useSlideshow();

  if (loading) {
    return (
      <SlideshowWrapper $verticalCentering={true}>
        <Loader />
      </SlideshowWrapper>
    );
  }

  if (!users.length) {
    return (
      <SlideshowWrapper $verticalCentering={true}>
        No users to display
      </SlideshowWrapper>
    );
  }

  return (
    <SlideshowWrapper>
      <UserCard {...users[currentUserIndex as number]} />
      <ButtonsContainer>
        <Button
          ariaLabel="Start slideshow"
          variant="primary"
          onClick={() => setSliderIsActive(true)}
        >
          Start
        </Button>
        <Button
          ariaLabel="Stop slideshow"
          variant="secondary"
          onClick={() => setSliderIsActive(false)}
        >
          Pause
        </Button>
      </ButtonsContainer>
    </SlideshowWrapper>
  );
};

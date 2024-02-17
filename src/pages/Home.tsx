import { Search } from "../components/Search/Search";
import { Slideshow } from "../components/Slideshow/Slideshow";

import { PageWrapper } from "./styles";

export const Home = () => {
  return (
    <PageWrapper>
      <Search />
      <Slideshow />
    </PageWrapper>
  );
};

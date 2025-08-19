import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Search heroes"
        description="discover, explore and manage superheroes and villains"
      />

      <HeroStats />

      <SearchControls />
    </>
  );
};

export default SearchPage;

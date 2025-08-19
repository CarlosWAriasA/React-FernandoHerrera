import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Search heroes"
        description="discover, explore and manage superheroes and villains"
      />

      <CustomBreadcrumbs currentPage="Search Heroes" />

      <HeroStats />

      <SearchControls />
    </>
  );
};

export default SearchPage;

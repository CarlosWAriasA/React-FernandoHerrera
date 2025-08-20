import { useSearchParams } from "react-router";

import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useHeroBySearch } from "@/heroes/hooks";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const { data: heroes } = useHeroBySearch({
    name: searchParams.get("name") ?? undefined,
    strength: searchParams.get("strength") ?? undefined,
  });

  return (
    <>
      <CustomJumbotron
        title="Search Superheroes"
        description="discover, explore and manage superheroes and villains"
      />

      <CustomBreadcrumbs currentPage="Search Heroes" />

      <HeroStats />

      <SearchControls />

      <HeroGrid heroes={heroes ?? []} />
    </>
  );
};

export default SearchPage;

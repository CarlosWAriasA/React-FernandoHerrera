import { useQuery } from "@tanstack/react-query";
import { getHeroesBySearchAction, type Options } from "../actions";

export const useHeroBySearch = ({
  name,
  team,
  category,
  universe,
  status,
  strength,
}: Options) => {
  return useQuery({
    queryKey: [
      "search",
      {
        name,
        team,
        category,
        universe,
        status,
        strength,
      },
    ],
    queryFn: () =>
      getHeroesBySearchAction({
        name,
        team,
        category,
        universe,
        status,
        strength,
      }),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};

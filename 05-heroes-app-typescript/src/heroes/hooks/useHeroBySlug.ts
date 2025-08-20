import { useQuery } from "@tanstack/react-query";
import { getHeroBySlugAction } from "../actions";

export const useHeroBySlug = (idSlug: string) => {
  return useQuery({
    queryKey: ["heroes", idSlug],
    queryFn: () => getHeroBySlugAction(idSlug),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};

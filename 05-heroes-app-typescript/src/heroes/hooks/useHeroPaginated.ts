import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions";

export const useHeroPaginated = (
  page: number,
  limit: number,
  category: string = "all"
) => {
  return useQuery({
    queryKey: [
      "heroes",
      {
        page,
        limit,
        category,
      },
    ],
    queryFn: () => getHeroesByPageAction(+page, +limit, category),
    staleTime: 1000 * 60 * 5,
  });
};

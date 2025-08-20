import { useQuery } from "@tanstack/react-query";
import { getSummaryAction } from "../actions";

export const useHeroSummary = () => {
  return useQuery({
    queryKey: ["summary"],
    queryFn: () => getSummaryAction(),
    staleTime: 1000 * 60 * 5,
  });
};

import { useQuery } from "@tanstack/react-query";
import { getData } from "./fetcher";

export function useCountry(value) {
  return useQuery({
    queryKey: ["country", value.searchCountry, value.continentName],
    queryFn: () => getData(value.searchCountry, value.continentName),
    gcTime: 10000,
  });
}

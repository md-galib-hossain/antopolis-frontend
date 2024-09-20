import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

type useGetAnimalsProps = {
  page: number;
  limit: number;
  searchTerm: string;
  category?: string | null;  
 
};

const useGetAnimals = ({
  page,
  limit,
  searchTerm,
  category,

}: useGetAnimalsProps) => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["animals", page, limit, searchTerm, category],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
      });
      if (searchTerm) {
        params.append("searchTerm", searchTerm);
      }
      if (category) {
        params.append("category", category);
      }
    

      const res = await axiosSecure.get(`/animal?${params.toString()}`);
      return res.data;
    },
  });

  return { data, isLoading };
};

export default useGetAnimals;

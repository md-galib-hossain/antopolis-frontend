import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

type CreateCategoryParams = {
  name: string;
};

const useCreateCategory = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const createCategory = async (category: CreateCategoryParams) => {
    console.log(category, "in hook");
    const response = await axiosSecure.post('/category', category);
    return response.data;
  };

  return useMutation({
    mutationFn: createCategory,
    onSuccess: (data) => {
      console.log("Category created successfully:", data);
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (error) => {
      console.error("Error creating category:", error);
    },
  });
};

export default useCreateCategory;

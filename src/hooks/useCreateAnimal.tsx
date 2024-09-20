import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

type CreateAnimalParams = {
  name: string;
  category: string;
  animalImg?: string;
};

const useCreateAnimal = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const createAnimal = async (animal: CreateAnimalParams) => {
    console.log(animal,"in hook")
    const response = await axiosSecure.post('/animal', animal);
    return response.data;
  };

  return useMutation({
    mutationFn: createAnimal,
    onSuccess: (data) => {
      console.log("Animal created successfully:", data);
      queryClient.invalidateQueries({
        queryKey: ["animals"],
      });
    },
    onError: (error) => {
      console.error("Error creating animal:", error);
    },
  });
};

export default useCreateAnimal;

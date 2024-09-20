import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { z } from "zod";
import { toast } from "sonner";
import useCreateAnimal from "@/hooks/useCreateAnimal";
import { animalNameSchema } from "@/lib/validation";
import { ICategory } from "@/types";
import { uploadToImgBB } from "@/utils/uploadToImgBB";

type FormValues = {
  categories: ICategory[];
  name: string;
  category: string;
  animalImg: string;
  image?: File | null;
};

const AddAnimalModal = ({
  categories,
  showAnimalModal,
  setShowAnimalModal,
}: any) => {
  const { mutate: createAnimal } = useCreateAnimal();

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(animalNameSchema),
    defaultValues: {
      name: "",
      category: "",
      animalImg: "",
      image: null,
    },
  });

  const handleFormSubmit = async (data: FormValues) => {
    try {
      let animalImgUrl = "";

      if (data.image) {
        animalImgUrl = (await uploadToImgBB(data.image)) as string;
      }
console.log(data)
      const animalData = {
        ...data,
        animalImg: animalImgUrl,
      };

      delete animalData.image;

      console.log(animalData);
      toast("Animal added");
      createAnimal(animalData);
      setShowAnimalModal(false);
      reset();
    } catch (error) {
      toast("Could not create animal");
      console.error(error);
    }
  };

  return (
    <Dialog open={showAnimalModal} onOpenChange={setShowAnimalModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Animal</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
          <div>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <>
                  <Input
                    id="name"
                    {...field}
                    placeholder="Animal Name"
                    className="bg-secondary border-0 font-semibold text-black"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </>
              )}
            />
          </div>
          <div>
            <Controller
              control={control}
              name="category"
              render={({ field }) => (
                <>
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full bg-secondary border-0 text-black">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        {categories?.map((category: ICategory) => (
                          <SelectItem key={category._id} value={category._id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.category && (
                    <p className="text-red-500">{errors.category.message}</p>
                  )}
                </>
              )}
            />
          </div>
          <div>
            <Controller
              control={control}
              name="image"
              render={({ field: { onChange, value, ...field } }) => (
                <>
                  <Input
                    {...field}
                    id="image"
                    type="file"
                    className="bg-secondary border-0"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      onChange(file); // Update the field value directly
                    }}
                  />
                  {errors.image && (
                    <p className="text-red-500">{errors.image.message}</p>
                  )}
                </>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            Create Animal
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAnimalModal;

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { toast } from "sonner";
import useCreateCategory from "@/hooks/useCreateCategory"; 

const categorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
});

type FormValues = {
  name: string;
};

const AddCategoryModal = ({ showCategoryModal, setShowCategoryModal }: any) => {
  const { mutate: createCategory } = useCreateCategory();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
    },
  });

  const handleFormSubmit = async (data: FormValues) => {
    try {
      await createCategory({ name: data.name });
      toast("Category created successfully!");
      setShowCategoryModal(false);
      reset();
    } catch (error) {
      toast("Could not create category");
      console.error(error);
    }
  };

  return (
    <Dialog open={showCategoryModal} onOpenChange={setShowCategoryModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
          <div>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <>
                  <Input
                    id="categoryName"
                    {...field}
                    className="bg-secondary border-0 font-semibold text-black"
                    placeholder="Category Name"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            Create Category
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryModal;

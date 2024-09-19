import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddCategoryModal = ({ showCategoryModal, setShowCategoryModal }: any) => {
  return (
    <Dialog open={showCategoryModal} onOpenChange={setShowCategoryModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <div>
            <Input
              id="categoryName"
              className="bg-secondary border-0 font-semibold text-black "
              placeholder="Category Name"
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

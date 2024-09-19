import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddAnimalModal = ({ showAnimalModal, setShowAnimalModal }: any) => {
  return (
    <Dialog open={showAnimalModal} onOpenChange={setShowAnimalModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Animal</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <div>
            <Input id="animalName" className="bg-secondary border-0 font-semibold text-black" placeholder="Animal Name"/>
          </div>
          <div>
            <Label htmlFor="animalImage">Image</Label>
            <div className="flex">
              <Input
                id="animalImage"
                type="file"
                className="bg-secondary border-0"
              />
              <Button variant="secondary" className="ml-2">
                Upload
              </Button>
            </div>
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

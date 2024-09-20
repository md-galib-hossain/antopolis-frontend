"use client";
import AddAnimalModal from "@/components/Animal/AddAnimalModal";
import AddCategoryModal from "@/components/Category/AddCategoryModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { ICategory } from "@/types";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
type HeaderProps = {
  categories: ICategory[];
  searchTerm: string;
  handleSearchChange: () => void;
  isLoading: boolean;
  setCategory: ()=>void
};

const Header = ({
  categories,
  searchTerm,
  handleSearchChange,
  isLoading,setCategory
}: any) => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showAnimalModal, setShowAnimalModal] = useState(false);
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 justify-between mb-8 items-center">
      {/* Category Buttons */}
      <div className="space-x-4 flex flex-wrap">
        {isLoading
          ? [1,2].map((el:number)=>(
            <Skeleton key={el}
            className="w-[120px] h-[36px] rounded-full bg-gray-700"
          />
          ))
          : categories.map((category: ICategory) => (
              <Button
                key={category.name}
                onClick={()=> setCategory(category._id)}
                variant="outline"
                className={`rounded-full px-4 py-2 text-sm font-medium border-red-500 text-red-500 bg-transparent hover:bg-transparent hover:border-green-500 hover:text-green-500 transition-colors duration-300 ease-in-out`}
              >
                {category.name}
              </Button>
            ))}
      </div>
      {/* search bar */}
      <div>
        <Input
          placeholder="Search animals"
          value={searchTerm}
          onChange={handleSearchChange}
          className="justify-center w-72 hidden lg:block border rounded-full bg-transparent placeholder:text-white"
        />
      </div>
      {/* Add Buttons */}
      <div className="flex space-x-4">
        <Button
          variant="outline"
          className="border-white text-white bg-transparent rounded-full px-4 py-2 transition-colors duration-300 ease-in-out"
          onClick={() => setShowAnimalModal(true)}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Animal
        </Button>
        <AddAnimalModal
        categories={categories}
          showAnimalModal={showAnimalModal}
          setShowAnimalModal={setShowAnimalModal}
        />
        <Button
          variant="outline"
          className="border-white text-white bg-transparent rounded-full px-4 py-2 transition-colors duration-300 ease-in-out"
          onClick={() => setShowCategoryModal(true)}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Category
        </Button>
        <AddCategoryModal
          showCategoryModal={showCategoryModal}
          setShowCategoryModal={setShowCategoryModal}
        />
      </div>
    </div>
  );
};

export default Header;

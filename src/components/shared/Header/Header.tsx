import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const Header = ({ categories }: any) => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 justify-between mb-8 items-center">
      {/* Category Buttons */}
      <div className="space-x-4 flex flex-wrap">
        {categories.map((category: any) => (
          <Button
            key={category.name}
            variant="outline"
            className={`rounded-full px-4 py-2 text-sm font-medium border-red-500 text-red-500 bg-transparent hover:bg-transparent hover:border-green-500 hover:text-green-500`}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Add Buttons */}
      <div className="flex space-x-4">
        <Button
          variant="outline"
          className="border-white text-white bg-transparent rounded-full px-4 py-2"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Animal
        </Button>
        <Button
          variant="outline"
          className="border-white text-white bg-transparent rounded-full px-4 py-2"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>
    </div>
  );
};

export default Header;

import AnimalCard from "@/components/Animal/AnimalCard";
import AnimalCardSkeleton from "@/components/Animal/AnimalSkeletonCard";
import { IAnimal } from "@/types";

interface AnimalGridProps {
  animals: IAnimal[] | undefined;
  isLoading: boolean;
}

const AnimalGrid = ({ animals, isLoading }: AnimalGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {isLoading
        ? [1, 2, 3, 4].map((el: number) => <AnimalCardSkeleton key={el} />)
        : animals?.map((animal: IAnimal) => (
            <AnimalCard key={animal.name} animal={animal} />
          ))}
    </div>
  );
};

export default AnimalGrid;

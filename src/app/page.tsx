"use client";
import AnimalCard from "@/components/Animal/AnimalCard";
import AnimalCardSkeleton from "@/components/Animal/AnimalSkeletonCard";
import Header from "@/components/shared/Header/Header";
import { useDebounce } from "@/hooks/useDebounce";
import useGetAnimals from "@/hooks/useGetAnimals";
import useGetCategories from "@/hooks/useGetCategories";
import usePagination from "@/hooks/usePagination";
import { IAnimal } from "@/types";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [category, setCategory] = useState<string | null>(null);

  const { page, limit, pageCount, handleChangePage, handleChangeLimit } =
    usePagination({
      initialPage: 1,
      initialLimit: 20,
      totalItems,
    });
  // Debounce the search term with a 600ms delay
  const debouncedSearchTerm = useDebounce({
    searchQuery: searchTerm,
    delay: 600,
  });
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const { data, isLoading } = useGetAnimals({
    page,
    limit,
    searchTerm: debouncedSearchTerm,
    category,
  });
  const { data: categoryData, isLoading: categoryLoading } = useGetCategories();
  const categories = categoryData?.data;
  const animals = data?.data;
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto">
        <Header
          categories={categories}
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
          isLoading={categoryLoading}
          setCategory={setCategory}
        />

        {/* Animal Cards */}
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4].map((el: number, index) => (
              <AnimalCardSkeleton key={el} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {animals?.map((animal: IAnimal) => (
              <AnimalCard key={animal.name} animal={animal} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

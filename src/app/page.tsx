"use client"
import AnimalGrid from "@/components/Animal/AnimalGrid";
import Select from "@/components/shared/Select";
import Header from "@/components/shared/Header/Header";
import MyPagination from "@/components/MyPagination";
import { useDebounce } from "@/hooks/useDebounce";
import useGetAnimals from "@/hooks/useGetAnimals";
import useGetCategories from "@/hooks/useGetCategories";
import usePagination from "@/hooks/usePagination";
import { useState, useEffect } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [category, setCategory] = useState<string | null>(null);

  const { page, limit, pageCount, handleChangePage, handleChangeLimit } =
    usePagination({
      initialPage: 1,
      initialLimit: 24,
      totalItems,
    });

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

  // Update totalItems when data changes
  useEffect(() => {
    if (data?.totalItems) {
      setTotalItems(data.totalItems);
    }
  }, [data]);

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
        <AnimalGrid animals={animals} isLoading={isLoading} />

        {/* Pagination */}
        {!isLoading && (
          <div className="flex justify-between items-center my-10">
            <Select value={limit} onChange={handleChangeLimit} />
            <MyPagination
              pageCount={pageCount}
              page={page}
              handleChange={handleChangePage}
            />
          </div>
        )}
      </div>
    </div>
  );
}

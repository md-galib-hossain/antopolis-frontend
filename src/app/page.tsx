import AnimalCard from "@/components/Animal/AnimalCard";
import Header from "@/components/shared/Header/Header";

export default function Home() {
  const categories = [
    { name: "Land Animal", color: "border-green-500 text-green-500" },
    { name: "Bird", color: "border-red-500 text-red-500" },
    { name: "Fish", color: "border-red-500 text-red-500" },
    { name: "Insect", color: "border-red-500 text-red-500" },
  ];
  const animals = [
    { name: "ELEPHANT", icon: "🐘", category: "Land Animal" },
    { name: "HORSE", icon: "🐎", category: "Land Animal" },
    { name: "FOX", icon: "🦊", category: "Land Animal" },
    { name: "COCKATOO", icon: "🦜", category: "Bird" },
    { name: "PHOENIX", icon: "🦅", category: "Bird" },
    { name: "SPARROW", icon: "🐦", category: "Bird" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto">
        <Header categories={categories} />

        {/* Animal Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {animals.map((animal) => (
            <AnimalCard key={animal.name} animal={animal} />
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Card, CardContent } from "../ui/card";

const AnimalCard = ({ animal }: any) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Card key={animal.name} className="bg-gray-800 border-none py-6 w-full">
        <CardContent className="flex flex-col items-center justify-center p-4">
          <div className="text-4xl mb-2">{animal.icon}</div>
        </CardContent>
      </Card>
      <div className="text-sm font-semibold text-gray-300">{animal.name}</div>
    </div>
  );
};

export default AnimalCard;

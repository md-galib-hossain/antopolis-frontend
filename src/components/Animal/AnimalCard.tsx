import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const AnimalCard = ({ animal }: any) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Card key={animal.name} className="bg-gray-800 border-none p-4 w-[150px] h-[180px] flex flex-col justify-center">
        <CardContent className="flex flex-col items-center justify-center p-0">
          <Image 
            src={animal.animalImg} 
            width={80} 
            height={80} 
            alt="animal image" 
            className="object-cover w-[80px] h-[80px]"
          />
        </CardContent>
      </Card>
      <div className="text-sm font-semibold text-gray-300 text-center">{animal.name}</div>
    </div>
  );
};

export default AnimalCard;

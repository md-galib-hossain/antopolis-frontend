import React from "react";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const AnimalCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Card className="bg-gray-800 border-none p-4 w-[150px] h-[180px] flex flex-col justify-center animate-pulse">
        <CardContent className="flex flex-col items-center justify-center p-0">
          {/* Animal Image Skeleton */}
          <Skeleton className="w-[80px] h-[80px] rounded-full mb-2" />
        </CardContent>
      </Card>
      {/* Animal Name Skeleton */}
      <Skeleton className="h-4 w-1/2 rounded mt-2" />
    </div>
  );
};

export default AnimalCardSkeleton;

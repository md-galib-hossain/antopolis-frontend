import React from "react";
import Image from "next/image";
import Link from "next/link";
import notfoundimg from "./../assets/notfound2.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; 

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
      <div className="w-[70%] mb-8">
        <Image src={notfoundimg} alt="not found" layout="responsive" />
      </div>
      <h1 className="text-2xl font-bold mb-4">
        Page is under construction
      </h1>
      <Button asChild variant="ghost" className="text-lg font-medium">
        <Link href="/">Go Back</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;

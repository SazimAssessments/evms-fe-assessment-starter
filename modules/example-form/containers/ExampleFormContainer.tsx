"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

import ExampleForm from "../components/ExampleForm/ExampleForm";

const ExampleFormContainer = () => (
  <div className="mx-auto max-w-md bg-background">
    <div className="mb-4">
      <Link href="/">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 hover:cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </Link>
    </div>

    <ExampleForm />
  </div>
);

export default ExampleFormContainer;

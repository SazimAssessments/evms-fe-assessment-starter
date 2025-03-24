"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Home = () => (
  <div className="max-w-md mx-auto border-t border-dashed border-muted-foreground/50 pb-4 px-4 h-32">
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:cursor-pointer">
          <span>Accordion</span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="py-2">
            <Link href="/example-form">
              <Button className="w-full flex items-center justify-center gap-2 hover:cursor-pointer">
                Navigate to Form Example
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

export default Home;

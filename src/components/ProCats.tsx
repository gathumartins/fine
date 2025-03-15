'use client'
import { useState } from "react";
import MyPagination from "@/components/MyPagination";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion";

const fadeInOut = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const slideInOut = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2, ease: "easeIn" } },
};

function ProCats({ sortedCats, ipp, comp, items }: any) {
const [selectedTab, setSelectedTab] = useState(sortedCats[0].node.slug);
  return (
    <section className="pt-14 md:pt-20 px-[16px]">
      <div className="myCont">
        <Tabs
          defaultValue={selectedTab}
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full relative"
        >
          <div className="md:hidden w-full mb-4">
            <Select onValueChange={setSelectedTab} value={selectedTab}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {sortedCats.map((catsH: any) => (
                  <SelectItem key={catsH.node.id} value={catsH.node.slug}>
                    {catsH.node.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <TabsList className="hidden md:flex justify-center sticky top-[90px] z-20 mx-auto bg-fprimary font-semibold border-1 border-fprimary">
            {sortedCats.map((catsH: any) => (
              <TabsTrigger
                key={catsH.node.id}
                value={catsH.node.slug}
                className="text-lg text-fsecondary"
              >
                {catsH.node.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {sortedCats.map((cat: any) => (
            <TabsContent
              value={cat.node.slug}
              key={cat.node.id}
              className="p-0 mt-8"
            >
              <motion.div
                variants={slideInOut}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h3>{cat.node.name}</h3>
                <MyPagination items={items} ipp={ipp} comp={comp} />
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

export default ProCats
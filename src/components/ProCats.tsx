'use client'
import React from 'react'
import MyPagination from "@/components/MyPagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


function ProCats({ sortedCats, ipp, comp }: any) {
let products = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="myCont">
      <Tabs defaultValue={sortedCats[0].node.slug} className="w-full relative">
        <TabsList className="flex justify-center sticky top-0 z-20 mx-auto">
          {sortedCats.map((catsH: any) => (
            <TabsTrigger key={catsH.node.id} value={catsH.node.slug}>
              {catsH.node.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {sortedCats.map((cat: any) => (
          <TabsContent value={cat.node.slug} key={cat.node.id}>
            <h3>{cat.node.name}</h3>
            <MyPagination items={products} ipp={ipp} comp={comp} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default ProCats
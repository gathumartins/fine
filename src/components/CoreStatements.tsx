import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function CoreStatements({states}:any) {
  const defaultTab = states.statement[0].core.shortname;
  return (
    <section className="py-[60px] px-[16px]">
      <header className="myCont sub title mb-8 text-center">
        <h2 className="leading-none !mb-0 !text-fsecondary">{states.title}</h2>
        <h3 className="leading-none !text-ftone">{states.subtitle}</h3>
      </header>
      <div className="myCont">
        <Tabs
          defaultValue={defaultTab}
          className="w-full md:w-[90%] md:mx-auto"
        >
          <div className="flex flex-col">
            <TabsList className="flex max-sm:min-h-[180px] flex-col sm:flex-row w-full sm:justify-evenly gap-1 sm:gap-5 border-b-1 border-b-fprimary rounded-none px-0 bg-transparent">
              {states.statement.map((stat: any, index: number) => (
                <TabsTrigger
                  value={stat.core.shortname}
                  className="text-xl font-semibold w-full sm:w-auto mb-0 sub text-fsecondary max-sm:bg-fprimary data-[state=active]:bg-fshade sm:data-[state=active]:bg-transparent data-[state=active]:border-b-fprimary sm:border-b-transparent flex-grow sm:border-b-4 sm:rounded-none data-[state=active]:text-fsecondary sm:data-[state=active]:text-fsecondary max-sm:py-2 sm:text-fsecondary"
                  key={index}
                >
                  {stat.core.title}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-grow">
              {states.statement.map((stat: any, index: number) => (
                <TabsContent value={stat.core.shortname} key={index}>
                  <div className="flex flex-col justify-center gap-5 place-items-center max-w-[800px] mx-auto py-10 text-center body">
                    <div
                      className="myPro text-ftone [&_b]:text-fsecondary [&_strong]:text-fsecondary [&_li]:list-disc [&_li]:list-inside [&_ol]:list-decimal [&_ol]:list-inside [&_ol>li]:text-left [&_li]:mb-4 text-xl leading-7 body"
                      dangerouslySetInnerHTML={{ __html: stat.core.body }}
                    ></div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default CoreStatements;

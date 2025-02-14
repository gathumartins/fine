import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function CoreStatements() {
  return (
    <section className="py-[60px] px-[16px]">
      <header className="myCont sub title mb-8 text-center">
        <h2 className="leading-none !mb-0 !text-fsecondary">Core Statements</h2>
        <h3 className="leading-none !text-ftone">Fine Work Kenya DNA</h3>
      </header>
      <div className="myCont">
        <Tabs defaultValue="mission" className="w-full md:w-[90%] md:mx-auto">
          <div className="flex flex-col">
            <TabsList className="flex max-sm:min-h-[180px] flex-col sm:flex-row w-full sm:justify-evenly gap-1 sm:gap-5 border-b-1 border-b-fprimary rounded-none px-0 bg-transparent">
              <TabsTrigger
                value="mission"
                className="text-xl font-semibold w-full sm:w-auto mb-0 sub text-fsecondary max-sm:bg-fprimary data-[state=active]:bg-fshade sm:data-[state=active]:bg-transparent data-[state=active]:border-b-fprimary sm:border-b-transparent flex-grow sm:border-b-4 sm:rounded-none data-[state=active]:text-fsecondary sm:data-[state=active]:text-fsecondary max-sm:py-2 sm:text-fsecondary"
              >
                Fine Work Mission
              </TabsTrigger>
              <TabsTrigger
                value="vision"
                className="text-xl font-semibold w-full sm:w-auto mb-0 sub text-fsecondary max-sm:bg-fprimary data-[state=active]:bg-fshade sm:data-[state=active]:bg-transparent data-[state=active]:border-b-fprimary sm:border-b-transparent flex-grow sm:border-b-4 sm:rounded-none data-[state=active]:text-fsecondary sm:data-[state=active]:text-fsecondary max-sm:py-2 sm:text-fsecondary"
              >
                Fine Work Vision
              </TabsTrigger>
              <TabsTrigger
                value="values"
                className="text-xl font-semibold w-full sm:w-auto mb-0 sub text-fsecondary max-sm:bg-fprimary data-[state=active]:bg-fshade sm:data-[state=active]:bg-transparent data-[state=active]:border-b-fprimary sm:border-b-transparent flex-grow sm:border-b-4 sm:rounded-none data-[state=active]:text-fsecondary sm:data-[state=active]:text-fsecondary max-sm:py-2 sm:text-fsecondary"
              >
                Fine Work Values
              </TabsTrigger>
            </TabsList>
            <div className="flex-grow">
              <TabsContent value="mission">
                <div className="flex flex-col justify-center gap-5 place-items-center max-w-[800px] mx-auto py-10 text-center body">
                  <div className="myPro text-ftone [&_b]:text-fsecondary [&_strong]:text-fsecondary [&_li]:list-disc [&_li]:list-inside [&_ol]:list-decimal [&_ol]:list-inside [&_li]:mb-4 text-xl leading-7 body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quaerat error eum dignissimos sit, consequuntur vitae!
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="vision">
                <div className="flex flex-col justify-center gap-5 place-items-center max-w-[800px] mx-auto py-10 text-center body">
                  <div className="myPro text-ftone [&_b]:text-fsecondary [&_strong]:text-fsecondary [&_li]:list-disc [&_li]:list-inside [&_ol]:list-decimal [&_ol]:list-inside [&_li]:mb-4 body text-xl leading-7">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quaerat error eum dignissimos sit, consequuntur vitae!
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="values">
                <div className="flex flex-col justify-center gap-5 place-items-center max-w-[800px] mx-auto py-10 text-center body">
                  <div className="myPro text-ftone [&_b]:text-fsecondary [&_strong]:text-fsecondary [&_li]:list-disc [&_li]:list-inside [&_ol]:list-decimal [&_ol]:list-inside [&_li]:mb-4 body text-xl leading-7">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quaerat error eum dignissimos sit, consequuntur vitae!
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default CoreStatements;

import React from 'react'
import {
  Card,
  CardContent
} from "@/components/ui/card";
import Link from 'next/link';


function ProjectCard() {
  return (
    <Link href="/projects/1">
      <Card className="bg-[url('/images/project.webp')] bg-cover bg-center bg-no-repeat flex min-h-[300px] justify-stretch relative group rounded-none">
        <CardContent
          className="bg-fsecondary/70 w-full p-10 flex place-items-end justify-start opacity-0 group group-hover:opacity-100 transition-opacity duration-300 relative before:content-[''] before:absolute before:z-10 before:left-7 before:top-4 before:bottom-4 before:h-[0%] group-hover:before:h-[90%] before:transition-all before:w-[1px] before:bg-white after:content-[''] after:absolute after:z-10 after:left-4 after:bottom-8 after:w-[0%] group-hover:after:w-[90%] after:transition-all after:h-[1px] after:bg-white"
        >
          <h3 className="text-white text-4xl font-medium mb-5 group-hover:mb-0 transition-all duration-400">Project Title</h3>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ProjectCard
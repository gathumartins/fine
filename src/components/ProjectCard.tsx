import React from 'react'
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import Link from 'next/link';


function ProjectCard({ project }: any) {
  const imageUrl = project.node.featuredImage?.node?.mediaItemUrl || "/images/project.webp";
  return (
    <Link href={`/projects/${project.node.slug}`}>
      <Card
        className="bg-cover bg-center bg-no-repeat flex min-h-[300px] justify-stretch relative group rounded-none"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <CardContent
          className="bg-fsecondary/70 w-full p-10 flex flex-col justify-end gap-6 opacity-100 transition-opacity duration-300 relative before:content-[''] before:absolute before:z-10 before:left-7 before:top-4 before:bottom-4 before:h-[0%] group-hover:before:h-[90%] before:transition-all before:w-[1px] before:bg-white after:content-[''] after:absolute after:z-10 after:left-4 after:bottom-8 after:w-[0%] group-hover:after:w-[90%] after:transition-all after:h-[1px] after:bg-white"
        >
          <h3 className="text-white text-4xl font-medium mb-2 transition-all duration-400">{project.node.title} Project</h3>
          <Link href={`/projects/${project.node.slug}`} className="inline-flex items-center justify-center bg-fprimary px-4 py-2 text-lg font-bold text-fsecondary transition-colors duration-300 hover:bg-fsecondary/75 hover:text-fprimary text-center">
            View project details
          </Link>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ProjectCard
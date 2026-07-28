import React from 'react'

function ProjectInfo({ fields }: any) {
  return (
    <div className="p-[30px] bg-fsecondary">
      <h3 className="mb-5 text-4xl text-white font-bold">
        {fields?.title || "Project Information"}
      </h3>
      <ul className="[&_li]:pb-2 [&_li]:text-white [&_li]:mb-3 [&_li]:border-b-1 border-ftint last:[&_li]:border-b-fsecondary">
        {fields?.fields.map((field: any, index: number) => (
          <li key={index}><span className="font-bold">{field.key}:</span> {field.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectInfo
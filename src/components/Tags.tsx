import React from 'react'

function Tags() {
  return (
    <div className="p-[30px] bg-[#f6f8fa]">
      <h3 className="mb-7 text-2xl text-fsecondary font-bold">Popular Tags</h3>
      <ul className="[&_li]:pb-2 [&_li]:mb-3 [&_li]:border-1 border-ftint [&_li]:text-center [&_li]:px-3 [&_li]:py-2  flex flex-row flex-wrap gap-3">
        <li className="text-sm text-fsecondary bg-transparent hover:bg-fprimary">
          Fire
        </li>
        <li className="text-sm text-fsecondary bg-transparent hover:bg-fprimary">
          HVAC
        </li>
        <li className="text-sm text-fsecondary bg-transparent hover:bg-fprimary">
          Extinguishers
        </li>
      </ul>
    </div>
  );
}

export default Tags
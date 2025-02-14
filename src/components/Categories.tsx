import React from 'react'
import Link from 'next/link';

function Categories() {
  return (
    <div className="p-[30px] bg-[#f6f8fa]">
      <h3 className="mb-7 text-2xl text-fsecondary font-bold">Popular Post</h3>
      <ul className="[&_li]:pb-2 [&_li]:mb-3 [&_li]:border-b-1 border-ftint last:[&_li]:border-b-[#f6f8fa]">
        <li className="text-xl text-fsecondary hover:text-fshade">
          <Link href="/" className="flex flex-row gap-4 items-center">
            Company Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Categories
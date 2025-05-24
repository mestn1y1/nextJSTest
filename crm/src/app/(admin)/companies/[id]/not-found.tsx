import Link from 'next/link';
import React from 'react';

export interface NotFoundProps {}
export default function NotFound({}: NotFoundProps) {
  return (
    <div>
      <p>Could not foun company</p>
      <Link className=" text-blue-700" href="/companies">
        Back to companies
      </Link>
    </div>
  );
}

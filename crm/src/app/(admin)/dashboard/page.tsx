import MagicBtn from '@/app/components/magic-btn';
import React from 'react';

export interface DashboardProps {}
export default function Dashboard({}: DashboardProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
      <MagicBtn />
    </main>
  );
}

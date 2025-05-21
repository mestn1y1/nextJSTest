'use client';

import React from 'react';
export interface ClientComponentProps {
  children?: React.ReactNode;
}

export default function ClientComponent({ children }: ClientComponentProps) {
  console.log('Client component');
  return (
    <div>
      <span>Client Component</span>
      {children}
    </div>
  );
}

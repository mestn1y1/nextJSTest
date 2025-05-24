import React from 'react';
export interface ServerComponentCopyProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentCopyProps) {
  return (
    <div>
      <span>Server Component Copy</span>
      {children}
    </div>
  );
}

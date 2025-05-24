'use client';
import React from 'react';

export interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>Something globally went wrong</div>
      </body>
    </html>
  );
}

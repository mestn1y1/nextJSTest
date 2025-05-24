'use client';
import React, { useEffect, useState } from 'react';
import Button from './button';

export interface LocalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function MagicBtn(props: LocalButtonProps) {
  const [count, setCoutn] = useState(0);
  useEffect(() => {
    if (count > 2) {
      throw new Error('Count is too high');
    }
  }, [count]);

  return (
    <Button {...props} onClick={() => setCoutn(count + 1)}>
      Magic button
    </Button>
  );
}

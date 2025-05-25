'use client';
import React, { useState } from 'react';
import Button from './button';
import { useRouter } from 'next/navigation';

export default function AddCompanyButton() {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    </>
  );
}

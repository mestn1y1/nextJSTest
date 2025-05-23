'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from './button';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        show={show}
        onClose={() => setShow(false)}
        onSubmit={console.log}
      />
    </>
  );
}

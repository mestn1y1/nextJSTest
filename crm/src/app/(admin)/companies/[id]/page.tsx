import Header from '../../../components/header';
import React from 'react';

export interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;

  return (
    <>
      <Header>Company ({resolvedParams.id})</Header>
    </>
  );
}

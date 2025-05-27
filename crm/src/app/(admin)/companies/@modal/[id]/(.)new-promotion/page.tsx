'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '../../../../../components/promotion-form-modal';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const router = useRouter();
  const { id } = await params;
  return (
    <PromotionFormModal
      companyId={id}
      show={true}
      onClose={() => router.back()}
    />
  );
}

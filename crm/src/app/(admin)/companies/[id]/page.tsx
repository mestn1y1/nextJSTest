import Header from '../../../components/header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const id = Number.parseInt(params.id, 10);

  if (Number.isNaN(id)) {
    notFound();
  }

  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${id})`}</p>
    </div>
  );
}

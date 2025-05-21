export const dynamic = 'force-dynamic';
import { headers } from 'next/headers';
import StatusLabel, { Status } from './components/status-label';
import AddCompanyButton from './components/add-company-button';

export default async function Home() {
  const now = new Date().toTimeString();
  return (
    <main>
      <h1 className="text-xl">Home page {now}</h1>
      <AddCompanyButton />
    </main>
  );
}

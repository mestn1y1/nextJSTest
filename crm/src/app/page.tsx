export const dynamic = 'force-dynamic';

import AddCompanyButton from './components/add-company-button';
import MagicBtn from './components/magic-btn';

export default async function Home() {
  const now = new Date().toTimeString();
  return (
    <main>
      <h1 className="text-xl">Home page {now}</h1>
      <AddCompanyButton />
      <MagicBtn />
    </main>
  );
}

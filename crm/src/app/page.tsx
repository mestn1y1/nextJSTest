export const dynamic = 'force-dynamic';

import AddCompanyButton from './components/add-company-button';
import ServerComponent from './components/server-component';
import ClientComponent from './components/client-component';
import ServerComponentCopy from './components/server-component copy';

export default async function Home() {
  const now = new Date().toTimeString();
  return (
    <main>
      <h1 className="text-xl">Home page {now}</h1>
      <AddCompanyButton />
      <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </main>
  );
}

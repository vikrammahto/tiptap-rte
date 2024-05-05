import Image from 'next/image';
import RTE from './components/RTE';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 h-screen">
      <RTE />
    </main>
  );
}

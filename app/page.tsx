import Events from '@/components/event';
import Landing from '@/components/Landing';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto">
      {/* <NavigationBar /> */}
      <Landing />
      <Events />
    </main>
  );
}
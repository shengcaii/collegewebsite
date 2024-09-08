import Landing from '@/components/Landing';
import NavigationBar from '@/components/NavigationBar'

export default function Home() {
  return (
    <main className="max-w-3xl m-4 px-3 py-1 md:mx-auto">
      <NavigationBar />
      <div>
        <Landing />
      </div>
    </main>
  );
}
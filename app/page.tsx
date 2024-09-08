import Footer from '@/components/Footer';
import Landing from '@/components/Landing';
import NavigationBar from '@/components/NavigationBar'

export default function Home() {
  return (
    <main className="max-w-3xl px-2 py-1 mx-auto">
      <NavigationBar />
      <div>
        <Landing />
      </div>
      <Footer />
    </main>
  );
}